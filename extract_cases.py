#!/usr/bin/env python3
import re

# 读取 gpt4o README
with open('gpt4o-image-prompts-master/README.md', 'r', encoding='utf-8') as f:
    content = f.read()

# 读取主 README
with open('README.md', 'r', encoding='utf-8') as f:
    main_readme = f.read()

# 找到主 README 中案例展示部分的位置
showcase_start = main_readme.find('## 🖼️ 案例展示')
if showcase_start == -1:
    print("找不到案例展示部分")
    exit(1)

# 找到投稿指南部分的位置（案例展示结束的地方）
contribute_start = main_readme.find('## 📝 投稿指南')
if contribute_start == -1:
    contribute_start = main_readme.find('## 🤝 贡献者')
if contribute_start == -1:
    contribute_start = main_readme.find('---')
    # 找第三个 --- 作为结束
    count = 0
    pos = 0
    while pos < len(main_readme):
        pos = main_readme.find('---', pos)
        if pos == -1:
            break
        count += 1
        if count >= 3:
            contribute_start = pos
            break
        pos += 3

# 提取案例展示部分之前的内容
header = main_readme[:showcase_start + len('## 🖼️ 案例展示\n')]

# 提取投稿指南及之后的内容
footer = main_readme[contribute_start:]

# 从 gpt4o README 中提取所有案例
# 模式：<a id="prompt-数字"></a>\n## 案例 数字：标题
cases = []
pattern = r'<a id="prompt-(\d+)"></a>\n## (案例 \d+：[^\n]+)'
matches = list(re.finditer(pattern, content))

print(f"找到 {len(matches)} 个案例")

# 提取每个案例的完整内容
for i, match in enumerate(matches):
    case_id = match.group(1)
    title_line = match.group(2)

    # 获取案例的起始位置
    start_pos = match.start()

    # 获取下一个案例的起始位置或文件结尾
    if i + 1 < len(matches):
        end_pos = matches[i + 1].start()
    else:
        end_pos = len(content)

    # 提取案例内容
    case_content = content[start_pos:end_pos].strip()

    # 转换格式
    # 原格式：<a id="prompt-988"></a>\n## 案例 988：圣诞特辑-冷艳圣诞甜酷皆在方寸间...
    # 新格式：#### 988. 圣诞特辑-冷艳圣诞甜酷皆在方寸间

    # 提取标题
    title_match = re.search(r'## 案例 \d+：(.+?)(?:\s+\(来源|$)', case_content)
    if title_match:
        title = title_match.group(1).strip()
    else:
        title = case_content.split('\n')[0].replace('## 案例 988：', '').strip()
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

    # 构建新的案例格式
    new_case = f"#### {case_id}. {title}\n\n"

    if source or model:
        meta_info = []
        if model:
            meta_info.append(f"**模型**：{model}")
        if source:
            meta_info.append(f"**来源**：{source}")
        new_case += " | ".join(meta_info) + "\n\n"

    # 添加图片
    for img in images:
        new_case += f"<div style=\"text-align: center; margin: 20px 0;\">\n"
        new_case += f"<img src=\"https://raw.githubusercontent.com/xianyu110/awesome-nanobananapro-prompts/main/gpt4o-image-prompts-master/images/{img}\" style=\"max-width: 100%; border-radius: 8px;\" alt=\"{title}\">\n"
        new_case += f"</div>\n\n"

    # 添加提示词
    if cn_prompt:
        new_case += f"**提示词：**\n```\n{cn_prompt}\n```\n\n"
    if en_prompt:
        new_case += f"**English Prompt:**\n```\n{en_prompt}\n```\n\n"

    new_case += "---\n\n"
    cases.append(new_case)

# 组合新的 README
new_readme = header + "\n"
new_readme += f"> 📊 **共收录 {len(cases)} 个精选案例**\n\n"
new_readme += "---\n\n"
new_readme += "".join(cases)
new_readme += "\n" + footer

# 写入新文件
with open('README.md', 'w', encoding='utf-8') as f:
    f.write(new_readme)

print(f"已将 {len(cases)} 个案例整合到主 README.md")
