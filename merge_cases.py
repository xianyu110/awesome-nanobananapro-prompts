#!/usr/bin/env python3
import re
import json

# 所有要处理的 gpt4o 文件
gpt4o_files = [
    'gpt4o-image-prompts-master/README.md',
    'gpt4o-image-prompts-master/100.md',
    'gpt4o-image-prompts-master/200.md',
    'gpt4o-image-prompts-master/300.md',
    'gpt4o-image-prompts-master/400.md',
    'gpt4o-image-prompts-master/500.md',
    'gpt4o-image-prompts-master/600.md',
    'gpt4o-image-prompts-master/700.md',
]

# 分类规则
category_rules = [
    (r'(刺绣|毛毡|毛线|编织|粘土|像素|像素风|雕塑|马赛克|熔化|变异|霓虹|玻璃|陶瓷|金属|橡皮|气球|折纸|Origami|剪纸|木头|木雕|木偶|锡玩具|浮雕|手工)', 'art'),
    (r'(角色|character|GTA|迷你模型|人偶|公仔|手办)', 'character'),
    (r'(肖像|portrait|拼图肖像)', 'portrait'),
    (r'(风格|style)', 'style'),
    (r'(场景|scene|微缩|树屋|洞穴|海洋|雨|街道|走廊|房间|森林|花园|城市|景观|环境|山脉|峡谷|洞穴|岛屿)', 'scene'),
    (r'(海报|poster|品牌设计|设计指南|排���)', 'poster'),
    (r'(Logo|图标|icon|标志|徽标|badge)', 'logo'),
    (r'(UI|界面|按键|键盘|屏幕)', 'ui'),
    (r'(包装|packaging|纸折叠|纸玻璃|容器|盒子|袋子)', 'packaging'),
    (r'(产品|product|广告|advert|brand|品牌|促销)', 'product'),
    (r'(美妆|化妆|化妆品|cosmetic)', 'beauty'),
    (r'(食品|食物|美食|饮料|bread|水果|蔬菜|糖果|chocolate|coffee|茶|酒)', 'food'),
    (r'(摄影|photography|照片|写实|镜头|棚拍|mugshot|证件照|cinematic|电影级)', 'photography'),
    (r'(拼贴|collage|九宫格|网格|联系表|组合)', 'collage'),
    (r'(游戏|game|GTA|塞尔达|我的世界|Minecraft|任天堂|Switch|游戏场景|军事训练|士兵|指挥官|作战)', 'game'),
    (r'(漫画|manga|翻译|上色|连环画|无声电影|cartoon|卡通|动画|anime)', 'comic'),
    (r'(传统|traditional|古诗|书法|古风|古画|古籍|中国|戏曲|洞壁画|岩画|民族风|复古|vintage|古典)', 'traditional'),
    (r'(时尚|fashion|穿搭|服装|衣服|鞋|包包|珠宝|首饰|外套|夹克|裙子|裤子|帽子|眼镜|围巾|手套)', 'fashion'),
    (r'(信息图|infographic|卡片|图表|指南|MBTI|数据|教学|科普)', 'infographic'),
    (r'(技术|technical|工程|图纸|爆炸图|解剖|机械|齿轮|机器人|科技|futuristic|未来)', 'technical'),
    (r'(编辑|editing|修改|变换|转换|retexture|重制|transform)', 'editing'),
    (r'(圣诞|christmas|圣诞特辑|Xmas|snow|雪|snowman|圣诞树|驯鹿)', 'christmas'),
    (r'(3D|渲染|render|voxel|等距|isometric)', '3d'),
    (r'(幻想|fantasy|超现实|surreal|梦境|梦境|魔法|魔法|神话|童话|奇幻|精灵|巨龙|龙|独角兽|女巫|wizard)', 'fantasy'),
    (r'(动物|animal|宠物|pet|猫|dog|狗|昆虫|鸟类|蜜蜂|bear|熊|panda|熊猫|lion|狮子|tiger|老虎|elephant|象)', 'animal'),
    (r'(文字|文本|font|字母|text|typography|标语|slogan|标题|title|标志|text)', 'text'),
    (r'(情绪|心理|emotion|思想|思考|表情|expression|feeling)', 'emotion'),
    (r'(粒子|particle|特效|fx|发光|glow|bloom|火花|火焰|fire|火|光|light|霓虹|neon|aurora|极光)', 'effects'),
    (r'(自然|nature|风景|landscape|山|mountain|海|sea|ocean|湖|lake|河|river|天空|sky|云|cloud|sun|sun|月|moon|星空|星星|雨|rain|雪|snow)', 'nature'),
    (r'(建筑|architecture|室内|interior|房子|house|房间|room|building|楼|塔|桥梁|桥|城堡|castle|宫殿|palace)', 'architecture'),
    (r'(车|car|汽车|摩托车|motorcycle|自行车|bicycle|船|boat|飞机|airplane|火车|train|地铁|subway|bus|公交)', 'vehicle'),
    (r'(运动|sport|跑步|running|健身|gym|足球|football|篮球|basketball|网球|tennis)', 'sport'),
    (r'(音乐|music|乐器|instrument|吉他|guitar|钢琴|piano|鼓|drum|歌手|singer|乐队|band)', 'music'),
    (r'(书|book|书籍|笔记本|notebook|笔|pen|纸|paper|铅笔|pencil|文具|stationery)', 'stationery'),
    (r'(植物|plant|花|flower|树|tree|草|grass|叶子|leaf|叶子|花朵|bloom|花园|garden)', 'plant'),
    (r'(AI|机器人|robot|智能|smart|电脑|computer|手机|phone|app|应用|软件|software|网络|network|代码|code|编程|program)', 'tech'),
    (r'(抽象|abstract|概念|concept|几何|geometric|形状|shape|形式|form|符号|symbol)', 'abstract'),
    (r'(微型|miniature|mini|迷你|小巧|tiny|小人国|微缩模型)', 'miniature'),
    (r'(魔法|magic|magical|enchanted|附魔|spell|咒语|witch|wizard巫师)', 'magic'),
    (r'(恐怖|horror|惊悚|thriller|ghost|鬼|zombie|僵尸|vampire|吸血鬼|skull|骷髅)', 'horror'),
]

# 收集所有 gpt4o 案例
gpt4o_cases = []

for filename in gpt4o_files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        continue

    pattern = r'<a id="prompt-(\d+)"></a>\n## (案例 \d+：[^\n]+)'
    matches = list(re.finditer(pattern, content))

    for i, match in enumerate(matches):
        case_id = int(match.group(1))
        start_pos = match.start()

        if i + 1 < len(matches):
            end_pos = matches[i + 1].start()
        else:
            end_pos = len(content)

        case_content = content[start_pos:end_pos].strip()

        if any(c['id'] == case_id for c in gpt4o_cases):
            continue

        title_match = re.search(r'## 案例 \d+：(.+?)(?:\s+\(来源|$|\n)', case_content)
        if title_match:
            title = title_match.group(1).strip()
        else:
            title = f"案例 {case_id}"

        source_match = re.search(r'\(来源 \[@([^\]]+)\]', case_content)
        author = source_match.group(1) if source_match else "community"

        prompt_match = re.search(r'\*\*中文提示词：\*\*\n```\n(.*?)\n```', case_content, re.DOTALL)
        if not prompt_match:
            prompt_match = re.search(r'\*\*提示词：\*\*\n```\n(.*?)\n```', case_content, re.DOTALL)
        cn_prompt = prompt_match.group(1).strip() if prompt_match else ""

        images = re.findall(r'<img src="./images/([^"]+)"', case_content)

        category = 'general'
        for key, cat in category_rules:
            if re.search(key, title, re.IGNORECASE):
                category = cat
                break

        tags = []
        if '圣诞' in title or 'christmas' in title.lower():
            tags.append('圣诞')
        if '拼贴' in title or '九宫格' in title:
            tags.append('拼贴')
        if '肖像' in title or '人像' in title:
            tags.append('人像')
        if '产品' in title:
            tags.append('产品')
        if '海报' in title:
            tags.append('海报')
        if not tags:
            tags.append('AI绘图')

        # 使用 case_id 作为图片文件名，确保图片和提示词匹配
        # 检查文件扩展名：优先使用 .png，其次 .jpeg，最后 .jpg
        import os
        base_path = 'gpt4o-image-prompts-master/images'
        ext = '.png'
        if not os.path.exists(f"{base_path}/{case_id}.png"):
            if os.path.exists(f"{base_path}/{case_id}.jpeg"):
                ext = '.jpeg'
            elif os.path.exists(f"{base_path}/{case_id}.jpg"):
                ext = '.jpg'
        img = f"{case_id}{ext}"

        # 限制 prompt 长度并转义
        prompt_clean = cn_prompt.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        if len(prompt_clean) > 500:
            prompt_clean = prompt_clean[:500] + '...'

        # gpt4o 案例使用原始 id (1-988)，优先展示
        gpt4o_cases.append({
            'id': case_id,  # 使用原始 ID，gpt4o 案例优先展示
            'title': title,
            'category': category,
            'author': f"@{author}",
            'tags': tags,
            'img': f"https://raw.githubusercontent.com/xianyu110/awesome-nanobananapro-prompts/main/gpt4o-image-prompts-master/images/{img}",
            'prompt': prompt_clean
        })

print(f"从 gpt4o 提取了 {len(gpt4o_cases)} 个案例")

# gpt4o 案例按 id 排序
gpt4o_cases.sort(key=lambda x: x['id'])

# 读取旧的 script.js (371个案例)
old_cases = []
with open('/tmp/script_old.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取旧案例
for line in content.split('\n'):
    if line.strip().startswith('{ id:'):
        case_match = re.search(r'\{ id: (\d+), title: "([^"]+)", category: "([^"]+)", author: "([^"]+)", tags: (\[[^\]]+\]), img: "([^"]+)", prompt: "([^"]+)" \}', line)
        if case_match:
            old_cases.append({
                'id': int(case_match.group(1)),
                'title': case_match.group(2),
                'category': case_match.group(3),
                'author': case_match.group(4),
                'tags': case_match.group(5),
                'img': case_match.group(6),
                'prompt': case_match.group(7)
            })

print(f"从旧版本提取了 {len(old_cases)} 个案例")

# 旧案例 ID 从 1000 开始
for case in old_cases:
    case['id'] = case['id'] + 1000

# 合并：gpt4o案例在前(1-988)，旧案例在后(1000+)
all_cases = gpt4o_cases + old_cases

print(f"总共 {len(all_cases)} 个案例")

# 生成新的 script.js
js_content = "// 所有案例数据\nconst casesData = [\n"

for case in all_cases:
    js_content += f"    {{ id: {case['id']}, title: \"{case['title']}\", category: \"{case['category']}\", author: \"{case['author']}\", tags: {json.dumps(case['tags'], ensure_ascii=False)}, img: \"{case['img']}\", prompt: \"{case['prompt']}\" }},\n"

js_content += "];\n"

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("已生成 script.js")

# 统计分类
category_count = {}
for case in all_cases:
    cat = case['category']
    category_count[cat] = category_count.get(cat, 0) + 1

print("\n分类统计:")
for cat, count in sorted(category_count.items(), key=lambda x: x[1], reverse=True):
    print(f"  {cat}: {count}")
