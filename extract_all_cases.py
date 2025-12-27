#!/usr/bin/env python3
import re
import os

# 所有要处理的文件
files_to_process = [
    'gpt4o-image-prompts-master/README.md',
    'gpt4o-image-prompts-master/100.md',
    'gpt4o-image-prompts-master/200.md',
    'gpt4o-image-prompts-master/300.md',
    'gpt4o-image-prompts-master/400.md',
    'gpt4o-image-prompts-master/500.md',
    'gpt4o-image-prompts-master/600.md',
    'gpt4o-image-prompts-master/700.md',
]

# 读取主 README
with open('README.md', 'r', encoding='utf-8') as f:
    main_readme = f.read()

# 找到主 README 中案例展示部分的位置
showcase_start = main_readme.find('## 🖼️ 案例展示')
if showcase_start == -1:
    print("找不到案例展示部分")
    exit(1)

# 找到投稿指南部分的位置
contribute_start = main_readme.find('## 📝 投稿指南')
if contribute_start == -1:
    contribute_start = main_readme.find('## 🤝 贡献者')
if contribute_start == -1:
    contribute_start = len(main_readme)

# 提取案例展示部分之前的内容
header = main_readme[:showcase_start + len('## 🖼️ 案例展示\n')]

# 提取投稿指南及之后的内容
footer = main_readme[contribute_start:]

# 收集所有案例
all_cases = []

# 处理每个文件
for filename in files_to_process:
    if not os.path.exists(filename):
        print(f"文件不存在: {filename}")
        continue

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 从文件名提取起始数字（用于过滤）
    file_num = 0
    if filename != 'gpt4o-image-prompts-master/README.md':
        file_num = int(os.path.basename(filename).replace('.md', ''))

    # 查找所有案例
    pattern = r'<a id="prompt-(\d+)"></a>\n## (案例 \d+：[^\n]+)'
    matches = list(re.finditer(pattern, content))
    print(f"{filename}: 找到 {len(matches)} 个案例")

    # 提取每个案例的完整内容
    for i, match in enumerate(matches):
        case_id = int(match.group(1))

        # 获取案例的起始位置
        start_pos = match.start()

        # 获取下一个案例的起始位置或文件结尾
        if i + 1 < len(matches):
            end_pos = matches[i + 1].start()
        else:
            end_pos = len(content)

        # 提取案例内容
        case_content = content[start_pos:end_pos].strip()

        # 跳过已存在的案例
        if any(c['id'] == case_id for c in all_cases):
            continue

        # 提取标题
        title_match = re.search(r'## 案例 \d+：(.+?)(?:\s+\(来源|$|\n)', case_content)
        if title_match:
            title = title_match.group(1).strip()
        else:
            # 从第一行提取
            first_line = case_content.split('\n')[0]
            title = re.sub(r'^## 案例 \d+：', '', first_line)
            if ' (来源' in title:
                title = title.split(' (来源')[0].strip()

        # 提取来源
        source_match = re.search(r'\(来源 \[@([^\]]+)\]\([^\)]+\)\)', case_content)
        source = f"@{source_match.group(1)}" if source_match else ""

        # 提取模型
        model_match = re.search(r'模型：([^\n]+)', case_content)
        model = model_match.group(1).strip() if model_match else ""

        # 提取中文提示词
        prompt_match = re.search(r'\*\*中文提示词：\*\*\n```\n(.*?)\n```', case_content, re.DOTALL)
        if not prompt_match:
            prompt_match = re.search(r'\*\*提示词：\*\*\n```\n(.*?)\n```', case_content, re.DOTALL)
        cn_prompt = prompt_match.group(1).strip() if prompt_match else ""

        # 提取英文提示词
        en_prompt_match = re.search(r'\*\*English Prompt：\*\*\n```\n(.*?)\n```', case_content, re.DOTALL)
        en_prompt = en_prompt_match.group(1).strip() if en_prompt_match else ""

        # 提取图片
        images = re.findall(r'<img src="./images/([^"]+)"', case_content)

        all_cases.append({
            'id': case_id,
            'title': title,
            'source': source,
            'model': model,
            'cn_prompt': cn_prompt,
            'en_prompt': en_prompt,
            'images': images
        })

# 按 ID 排序
all_cases.sort(key=lambda x: x['id'])

print(f"\n总共找到 {len(all_cases)} 个唯一案例")

# 生成新的案例内容
cases_output = []
for case in all_cases:
    new_case = f"#### {case['id']}. {case['title']}\n\n"

    if case['source'] or case['model']:
        meta_info = []
        if case['model']:
            meta_info.append(f"**模型**：{case['model']}")
        if case['source']:
            meta_info.append(f"**来源**：{case['source']}")
        new_case += " | ".join(meta_info) + "\n\n"

    # 添加图片
    for img in case['images']:
        new_case += f"<div style=\"text-align: center; margin: 20px 0;\">\n"
        new_case += f"<img src=\"https://raw.githubusercontent.com/xianyu110/awesome-nanobananapro-prompts/main/gpt4o-image-prompts-master/images/{img}\" style=\"max-width: 100%; border-radius: 8px;\" alt=\"{case['title']}\">\n"
        new_case += f"</div>\n\n"

    # 添加提示词
    if case['cn_prompt']:
        prompt_text = case['cn_prompt']
        # 限制提示词长度
        if len(prompt_text) > 2000:
            prompt_text = prompt_text[:2000] + "\n...(提示词过长，已截断)"
        new_case += f"**提示词：**\n```\n{prompt_text}\n```\n\n"
    if case['en_prompt']:
        new_case += f"**English Prompt:**\n```\n{case['en_prompt']}\n```\n\n"

    new_case += "---\n\n"
    cases_output.append(new_case)

# 组合新的 README
new_readme = header + "\n"
new_readme += f"> 📊 **共收录 {len(all_cases)} 个精选案例**\n\n"
new_readme += "---\n\n"
new_readme += "".join(cases_output)
new_readme += "\n" + footer

# 写入文件
with open('README.md', 'w', encoding='utf-8') as f:
    f.write(new_readme)

print(f"已将 {len(all_cases)} 个案例整合到主 README.md")
