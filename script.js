// 所有案例数据
const casesData = [
    // Part 1: 核心能力展示
    { id: 1, title: "角色一致性与口型准确性", category: "character", author: "@balconychy", tags: ["角色一致性", "4K"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719889.png", prompt: "请绘制一张四宫格图片，四张图依次表现同一位戴着斗笠的年轻男子分别发音「我」「上」「早」「八」，人物外貌保持一致，口型准确对应每个字的发音，整体风格统一，16:9，4K" },
    { id: 2, title: "漫画上色与翻译", category: "translation", author: "@dotey", tags: ["翻译", "上色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719131.png", prompt: "将图片上的文字翻译为中文，并上色，其他不变" },
    { id: 3, title: "国际化海报翻译与重排", category: "poster", author: "@dotey", tags: ["海报", "翻译"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719266.png", prompt: "将英文海报中的英文翻译成中文。" },
    { id: 4, title: "复杂UI界面复刻（聊天记录）", category: "ui", author: "@designer", tags: ["UI设计", "微信"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719642.png", prompt: "生成两张竖版的微信群聊天界面截图，群成员正在讨论 Nano Banana Pro 的发布。" },
    { id: 5, title: "长文本与古画风格结合", category: "traditional", author: "@artist", tags: ["古风", "长文本"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719856.png", prompt: "生成一幅 4K 古画，画上写着《水调歌头》全文" },
    { id: 6, title: "IP角色融合创作", category: "ip", author: "@creator", tags: ["IP融合", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719241.png", prompt: "哆啦A梦和李白在月下对酌。圆月高悬，古代亭台楼阁，哆啦A梦穿着唐朝服饰，李白持酒壶，石桌上摆着酒具，仙气飘飘，中日混合画风，精致细节" },
    { id: 7, title: "搜索增强：行程规划", category: "infographic", author: "@traveler", tags: ["信息图", "搜索增强"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719795.png", prompt: "生成一张可视化的图片，展示在广州旅游的 2 天行程。" },
    { id: 8, title: "搜索增强：天气信息图", category: "infographic", author: "@weather", tags: ["波普艺术", "实时"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211720294.png", prompt: "搜索广州实时天气信息，制作一幅中文波普艺术风格的信息图，4:3" },
    { id: 9, title: "实时天气UI设计", category: "ui", author: "@designer", tags: ["UI设计", "天气"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740561.jpeg", prompt: "帮我搜索现在北京的天气信息，并且将其放在一个天气UI设计稿中" },
    { id: 10, title: "搜索增强与图像编辑结合", category: "style", author: "@editor", tags: ["复古海报", "搜索增强"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740241.png", prompt: '搜索北京市今天的天气和一条正能量的早间新闻。将我的照片转换成"美式复古海报"风格。' },
    { id: 11, title: "多语言手账创作", category: "scene", author: "@traveler", tags: ["手账", "多语言"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740100.jpeg", prompt: "帮我生成一张拼贴手帐风格的广西旅游笔记，上面记录着自己的行程以及路上的照片等，文字有中文、韩语和英语。" },
    { id: 12, title: "多图输入与手写日记风格", category: "scene", author: "@diary", tags: ["日记", "手写"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740825.jpeg", prompt: "模拟在一张略带纹理的纸张上手写的关于今天的日记，拼贴画风格" },
    { id: 13, title: "中文字体设计", category: "design", author: "@font", tags: ["字体", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740992.jpeg", prompt: "多种字体设计提示词的综合效果展示" },
    { id: 14, title: "产品海报设计（单图）", category: "design", author: "@product", tags: ["产品", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740269.png", prompt: "为这款米色皮革手机壳设计产品海报。4K超清画面质感，静物摄影，昏暗氛围，光线追踪，高级柔光。" },
    { id: 15, title: "产品海报设计（多图）", category: "design", author: "@product", tags: ["香薰", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740031.jpeg", prompt: "为这两个香薰产品设计产品海报。两个香薰放在一起的超近景特写，质感清晰。" },
    { id: 16, title: "产品场景渲染", category: "design", author: "@render", tags: ["场景", "渲染"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740567.jpeg", prompt: "帮我将这个香薰放在符合设计风格的室内，大师级摄影，特写镜头" },
    { id: 17, title: "多物品场景融合", category: "lifestyle", author: "@interior", tags: ["家具", "融合"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740721.jpeg", prompt: "将这些家具融洽的放到一个房间中" },
    { id: 18, title: "人像精细编辑与美颜", category: "editing", author: "@beauty", tags: ["美颜", "编辑"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740959.jpeg", prompt: "轻度美颜、瘦脸，发型替换为美式前刺，发际线前移，眼镜更换为墨镜" },
    { id: 19, title: "IP版权内容生成（跨文化融合）", category: "ip", author: "@ip", tags: ["IP融合", "大闹天宫"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740823.jpeg", prompt: "杰瑞鼠身披《大闹天宫》动画版标志性的鹅黄色虎皮裙、大红披风和金甲，头戴凤翅紫金冠，手持金箍棒" },
    { id: 20, title: "IP版权内容生成（关系图）", category: "infographic", author: "@ip", tags: ["权游", "关系图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740621.jpeg", prompt: "一张手帐风格图片，上面画着电视剧权力的游戏的人物关系和势力关系图，人物有头像" },
    { id: 21, title: "IP版权内容生成（游戏截图）", category: "game", author: "@game", tags: ["宝可梦", "游戏"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740038.jpeg", prompt: "3D写实风格的宝可梦主题MMO游戏截图" },
    { id: 22, title: "白模上色与渲染", category: "style", author: "@3d", tags: ["手办", "上色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740819.jpeg", prompt: "为这张手办完成材质添加和上色，同时将周围环境变为符合角色设定的环境" },
    { id: 23, title: "漫画翻译与上色（复杂场景）", category: "translation", author: "@manga", tags: ["海贼王", "上色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740983.jpeg", prompt: "对复杂海贼王漫画页进行翻译和上色" },
    { id: 24, title: "酸性设计/Y2K风格海报", category: "style", author: "@design", tags: ["Y2K", "酸性设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740806.jpeg", prompt: "将照片转换成Y2K美学或酸性设计风格的平面设计海报" },
    { id: 25, title: "UI设计风格迁移", category: "ui", author: "@ui", tags: ["风格迁移", "天气App"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740851.jpeg", prompt: "模仿这个设计稿的风格和关键元素表现形式，帮我生成一个天气应用的UI设计稿" },
    { id: 26, title: "超长文本古风画卷", category: "traditional", author: "@calligraphy", tags: ["琵琶行", "书法"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742741.jpeg", prompt: "在画面上方有一张长长的画卷上用潇洒的书法写着一整首白居易的《琵琶行》" },
    { id: 27, title: "微信群聊UI复刻（甄嬛传版）", category: "ui", author: "@chat", tags: ["微信", "甄嬛传"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742790.png", prompt: "生成一张微信手机聊天界面截图，严格按照微信的界面UI和排版方式，群聊名称：紫禁城吃瓜群" },
    { id: 28, title: "跨界IP游戏场景", category: "game", author: "@game", tags: ["原神", "马斯克"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742683.jpeg", prompt: "生成一张原神的实机战斗图片，旅行者主角正在和 boss 埃隆·马斯克战斗" },
    { id: 29, title: "超多IP角色大合照", category: "ip", author: "@crossover", tags: ["动漫", "大合照"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742701.jpeg", prompt: "中国动画中的孙悟空和路飞、漩涡鸣人、炭治郎等多个动漫角色站在一起，大杂烩式同框，集体大合照" },
    { id: 30, title: "科普图制作（光合作用）", category: "education", author: "@science", tags: ["科普", "植物"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742099.png", prompt: "用中文给我制作一张科普图片，讲述详细的植物进行光合作用的原��" },
    { id: 31, title: "科普图制作（牛顿三棱镜）", category: "education", author: "@science", tags: ["科普", "光学"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742184.png", prompt: "设计「经典光学实验：牛顿三棱镜分光」分镜式科普海报" },
    { id: 32, title: "科普图制作（染色体）", category: "education", author: "@science", tags: ["科普", "基因"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742565.jpeg", prompt: "用中文绘一张「人类基因组 23 对染色体概览」信息图" },
    { id: 33, title: "宠物照片编辑与Cos", category: "scene", author: "@pet", tags: ["宠物", "Cos"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742309.jpeg", prompt: "帮我的猫穿上疯狂动物城的兔子警官cos装扮" },
    { id: 34, title: "宠物商业联名海报", category: "design", author: "@pet", tags: ["宠物", "联名"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742258.jpeg", prompt: "以「77X肯德基」联名企划为主题，生成一张联名海报" },
    { id: 35, title: "海报风格迁移（美妆）", category: "design", author: "@design", tags: ["风格迁移", "美妆"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742362.png", prompt: "参考图片风格，将主题色换成粉色，将菜篮子换成化妆箱" },
    { id: 36, title: "海报风格迁移（春节）", category: "design", author: "@design", tags: ["春节", "马年"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742082.png", prompt: "参考图片的风格和色彩以及构图，生成一张2026年马年大吉的春节海报" },
    { id: 37, title: "产品与海报风格融合", category: "design", author: "@product", tags: ["洗衣液", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742003.png", prompt: "参考图1的海报风格，制作一张图2洗衣液产品的海报" },
    { id: 38, title: "线稿上色与细节丰富", category: "design", author: "@arch", tags: ["线稿", "城市"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742890.jpeg", prompt: "根据这张线稿，生成一张细节丰富的城市设计效果图" },
    { id: 39, title: "视角转换", category: "scene", author: "@view", tags: ["视角", "俯视"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742168.jpeg", prompt: "把这张图的四格场景都换成头顶的俯视视角" },
    { id: 40, title: "漫画翻译与上色（连贯操作）", category: "translation", author: "@manga", tags: ["漫画", "翻译"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742974.jpeg", prompt: "给这张漫画页上色并翻译成中文放到图中原来的位置" },
    { id: 41, title: "续写书页内容", category: "design", author: "@book", tags: ["书籍", "续写"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742672.jpeg", prompt: "生成图中这本书的下一页，页面的位置要正确，文字内容要延续" },
    { id: 42, title: "数学题解题过程可视化", category: "infographic", author: "@math", tags: ["数学", "解题"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742750.png", prompt: "画一张草稿纸，上面是这道题的解法" },
    { id: 43, title: "论文/长文本转白板图", category: "infographic", author: "@whiteboard", tags: ["白板", "论文"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742352.jpeg", prompt: "将长文本或PDF内容转换成一张详细的白板照片" },
    { id: 44, title: "产品多场景渲染（唱片店）", category: "product", author: "@cd", tags: ["CD", "场景"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743477.png", prompt: "90年代台北旧唱片店的木架上放置周杰伦CD" },
    { id: 45, title: "产品多场景渲染（悬浮）", category: "product", author: "@cd", tags: ["CD", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743803.png", prompt: "CD悬浮在半空中，周围是破碎的玻璃碎片" },
    { id: 46, title: "拼豆风格创作（手办）", category: "style", author: "@perler", tags: ["拼豆", "手办"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743192.png", prompt: "3D拼豆，盒子里装着精致的手办" },
    { id: 47, title: "拼豆风格创作（小狗）", category: "style", author: "@perler", tags: ["拼豆", "可爱"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743974.png", prompt: "拼豆小狗" },
    // Part 2: UI/UX与界面复刻
    { id: 48, title: "Windows XP 复刻", category: "ui", author: "@retro", tags: ["复古", "Windows"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740026.jpeg", prompt: "精确复刻 Windows XP 的桌面环境。要求包含：经典蓝绿色背景、左下角'开始'按钮" },
    { id: 49, title: "Windows 11 复刻", category: "ui", author: "@modern", tags: ["现代", "Windows"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740313.jpeg", prompt: "生成一个 Windows 11 桌面截图，同时打开三个窗口" },
    { id: 50, title: "Mac OS 9 复刻", category: "ui", author: "@retro", tags: ["复古", "Mac"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740040.jpeg", prompt: "复刻 Mac OS 9 的桌面截图，黑白或低色彩的像素化图标" },
    { id: 51, title: "macOS 最新版复刻", category: "ui", author: "@modern", tags: ["现代", "Mac"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740903.jpeg", prompt: "复刻最新的 macOS 桌面，顶部菜单栏清晰显示" },
    { id: 52, title: "SaaS Dashboard", category: "ui", author: "@dashboard", tags: ["数据", "图表"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740993.jpeg", prompt: "生成一张SaaS平台的数据面板，包含柱状图、饼图和进度条" },
    { id: 53, title: "数据大屏（新能源）", category: "ui", author: "@bigscreen", tags: ["大屏", "新能源"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749318.png", prompt: "帮我做一个新能源虚拟电厂的数据大屏，我要给领导展示的" },
    { id: 54, title: "APP原型图", category: "ui", author: "@prototype", tags: ["原型", "播客"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749206.jpeg", prompt: "我想开发一款类似于小宇宙的APP，请你帮我画个原型图" },
    { id: 55, title: "PPT页面设计", category: "ui", author: "@ppt", tags: ["PPT", "AI"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749614.png", prompt: "做一页PPT，关于AI Agent的应用场景，科技主题" },
    { id: 56, title: "科幻RPG游戏界面", category: "game", author: "@game", tags: ["游戏", "RPG"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740076.jpeg", prompt: "生成一个科幻 RPG 游戏的战斗界面" },
    { id: 57, title: "RTS游戏界面", category: "game", author: "@game", tags: ["游戏", "RTS"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740526.jpeg", prompt: "生成一个RTS 游戏的战斗界面" },
    { id: 58, title: "FPS游戏界面", category: "game", author: "@game", tags: ["游戏", "FPS"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740663.jpeg", prompt: "生成一个FPS 游戏的战斗画面，HUD瞄准镜" },
    { id: 59, title: "城市沙盒游戏界面", category: "game", author: "@game", tags: ["游戏", "沙盒"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740880.jpeg", prompt: "生成一个城市沙盒游戏的等距俯视截图" },
    { id: 60, title: "MOBA游戏界面", category: "game", author: "@game", tags: ["游戏", "MOBA"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740911.jpeg", prompt: "生成一个 MOBA 游戏的底部中央 HUD" },
    { id: 61, title: "桌游《卡坦岛》复刻", category: "game", author: "@board", tags: ["桌游", "卡坦岛"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740290.jpeg", prompt: "生成一个《卡坦岛》桌游的高精度复刻图" },
    { id: 62, title: "《剑网3》界面", category: "game", author: "@game", tags: ["剑网3", "武侠"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740303.jpeg", prompt: "生成一个《剑网3》战斗界面截图" },
    { id: 63, title: "《英雄联盟》界面", category: "game", author: "@game", tags: ["LOL", "MOBA"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740343.jpeg", prompt: "生成一个《英雄联盟》的对战界面" },
    { id: 64, title: "夜视仪FPS界面", category: "game", author: "@game", tags: ["FPS", "夜视"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740603.jpeg", prompt: "生成一个夜间战斗的截图，采用夜视仪效果" },
    { id: 65, title: "狙击镜界面", category: "game", author: "@game", tags: ["FPS", "狙击"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740041.jpeg", prompt: "生成一个狙击手通过高倍率瞄准镜瞄准目标的特写截图" },
    { id: 66, title: "武侠游戏过场", category: "game", author: "@game", tags: ["武侠", "过场"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740986.jpeg", prompt: "生成一个武侠游戏剧情过场动画的截图" },
    // Part 3: 内容创作与风格化应用
    { id: 67, title: "小红书封面（美食）", category: "social", author: "@xiaohongshu", tags: ["小红书", "美食"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "生成一张高饱和度的美食笔记封面，主题为3天瘦8斤的懒人减肥食谱" },
    { id: 68, title: "小红书封面（美妆）", category: "social", author: "@xiaohongshu", tags: ["小红书", "美妆"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740177.jpeg", prompt: "生成一张美妆教程封面，韩系清冷风滤镜" },
    { id: 69, title: "小红书封面（数码）", category: "social", author: "@xiaohongshu", tags: ["小红书", "数码"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740996.jpeg", prompt: "生成一个数码产品评测笔记内页" },
    { id: 70, title: "小红书封面（AI）", category: "social", author: "@xiaohongshu", tags: ["小红书", "AI"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740248.jpeg", prompt: "生成一张AI绘画教程笔记封面，30个Midjourney核心关键词" },
    { id: 71, title: "视觉小说（现代言情）", category: "movie", author: "@vn", tags: ["视觉小说", "言情"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740424.jpeg", prompt: "生成一个现代校园风格的视觉小说场景" },
    { id: 72, title: "视觉小说（古风武侠）", category: "movie", author: "@vn", tags: ["视觉小说", "武侠"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740689.jpeg", prompt: "生成一个古风武侠场景的视觉小说界面" },
    { id: 73, title: "视觉小说（奇幻冒险）", category: "movie", author: "@vn", tags: ["视觉小说", "奇幻"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741290.jpeg", prompt: "生成一个奇幻冒险风格的视觉小说界面" },
    { id: 74, title: "视觉小说（科幻机甲）", category: "movie", author: "@vn", tags: ["视觉小说", "机甲"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741345.jpeg", prompt: "生成一个科幻机甲题材的互动场景" },
    { id: 75, title: "古籍复刻《红楼梦》", category: "traditional", author: "@classic", tags: ["红楼梦", "古籍"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741694.jpeg", prompt: "生成一本打开的书，左页是《红楼梦》第一回的开篇段落" },
    { id: 76, title: "古籍复刻《论语》", category: "traditional", author: "@classic", tags: ["论语", "古籍"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741735.jpeg", prompt: "生成一张古籍线装书的双页内文特写，复刻《论语》学而篇" },
    { id: 77, title: "《兰亭集序》石碑", category: "traditional", author: "@calligraphy", tags: ["书法", "石碑"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741215.jpeg", prompt: "一个刻满经文的石碑，上刻有完整的《兰亭集序》" },
    { id: 78, title: "中文大写数字计算器", category: "design", author: "@creative", tags: ["计算器", "中文"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741252.jpeg", prompt: "一个电子计算器的屏幕，用中文字符显示算式" },
    { id: 79, title: "古画题跋", category: "traditional", author: "@painting", tags: ["山水画", "题跋"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741896.jpeg", prompt: "生成一幅南宋时期的青绿山水画长卷，有苏轼《题西林壁》题跋" },
    { id: 80, title: "漫画翻译上色（鬼灭）", category: "translation", author: "@manga", tags: ["鬼灭之刃", "上色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742933.png", prompt: "把这张图变成彩色，翻译成中文并放在对应的对话框内" },
    { id: 81, title: "风格转换（3D毛绒）", category: "style", author: "@style", tags: ["风格转换", "3D"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742667.jpeg", prompt: "将漫画转换为3D毛绒风格" },
    { id: 82, title: "电影海报《死亡诗社》", category: "poster", author: "@movie", tags: ["电影", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742631.jpeg", prompt: "电影《死亡诗社》艺术海报，主标题用流动的艺术手写字体" },
    { id: 83, title: "电影海报《天书奇谭》", category: "poster", author: "@movie", tags: ["动画", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742848.jpeg", prompt: "动画电影《天书奇谭》艺术海报，中国山水画风格" },
    { id: 84, title: "活动海报（AI赋能）", category: "poster", author: "@event", tags: ["活动", "AI"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749177.png", prompt: "主题为AI赋能发明创新的活动宣传海报" },
    { id: 85, title: "应县木塔结构解说图", category: "infographic", author: "@arch", tags: ["建筑", "解说"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742475.jpeg", prompt: "生成应县木塔的结构解说图，附上详细中文" },
    { id: 86, title: "苏绣工艺解说图", category: "infographic", author: "@craft", tags: ["苏绣", "工艺"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742643.jpeg", prompt: "生成苏绣工艺的详细解说图，配上详细的中文知识解析" },
    { id: 87, title: "百年孤独人物关系图", category: "infographic", author: "@book", tags: ["文学", "关系图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211751857.png", prompt: "画出《百年孤独》中的重要人物关系图，用中文表示关系" },
    { id: 88, title: "锂电池原理图", category: "infographic", author: "@science", tags: ["科普", "电池"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749359.png", prompt: "锂电池作用原理图，用中英文双语进行标注" },
    { id: 89, title: "个人名片设计", category: "poster", author: "@personal", tags: ["名片", "个人"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749848.png", prompt: "生成一张个人介绍图，用于向外展示" },
    { id: 90, title: "功夫图解", category: "infographic", author: "@kungfu", tags: ["功夫", "图解"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749585.png", prompt: "让特朗普用中文图解的方式教八部金刚功" },
    { id: 91, title: "古诗配图", category: "traditional", author: "@poetry", tags: ["古诗", "配图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749972.png", prompt: "为采菊东篱下，悠然见南山这首诗配图" },

    // Part 4: 特殊应用案例
    { id: 92, title: "金门大桥工程图解", category: "technical", author: "@engineering", tags: ["工程图", "透视图解"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225945521.jpeg", prompt: "这是一张经典的旧金山金门大桥风景照，但在画面之上，叠加了一层白色手绘风格的工程结构图解。" },
    { id: 93, title: "宇航服技术图纸", category: "technical", author: "@technical", tags: ["技术图纸", "宇航"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230025209.jpeg", prompt: "绘制此图的技术图纸" },
    { id: 94, title: "F1赛车引擎图解", category: "technical", author: "@f1", tags: ["F1", "赛车"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225946951.jpeg", prompt: "面对F1赛车复杂的引擎套件，技术图解" },
    { id: 95, title: "硅谷AI圈大合照", category: "fusion", author: "@silicon", tags: ["大合照", "AI圈"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225950556.jpeg", prompt: "将多个不同的AI领域人物完美融合到一个场景中，保持各自特征一致" },
    { id: 96, title: "AI圈名人合照", category: "fusion", author: "@ai", tags: ["名人", "合照"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225950947.jpeg", prompt: "硅谷AI圈大合照，每个人的面部特征都高度还原" },
    { id: 97, title: "多角色融合场景", category: "fusion", author: "@group", tags: ["多角色", "融合"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225951800.png", prompt: "同时处理十几张不同角色的参考图，完美融合到一个客厅场景中" },
    { id: 98, title: "文字一键排版", category: "text", author: "@text", tags: ["文字", "排版"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225952289.jpeg", prompt: "把文字原封不动地放进一本桌上的亮面杂志里，配上图片、精美排版、引言框和版式设计" },
    { id: 99, title: "杂志排版设计", category: "text", author: "@magazine", tags: ["杂志", "排版"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225952814.jpeg", prompt: "文字内容进行审美在线的双页排版，加上图表、引言框等设计" },
    { id: 100, title: "衣服平铺转模特图", category: "fashion", author: "@fashion", tags: ["服装", "模特"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225947979.jpeg", prompt: "生成一张身穿图中所有衣物的女模特图" },
    { id: 101, title: "真人换装", category: "fashion", author: "@style", tags: ["换装", "时尚"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225948464.jpeg", prompt: "给第二张图片中的人穿上第一张图片中的衣服" },
    { id: 102, title: "宠物Cos服装", category: "fashion", author: "@pet", tags: ["宠物", "Cos"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225948865.jpeg", prompt: "给图中小狗换上《疯狂动物城》中尼克的衣服" },
    { id: 103, title: "电影周边设计", category: "merchandise", author: "@movie", tags: ["周边", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225953247.jpeg", prompt: "生成一张电影《机器人之梦》的周边图，包括手机壳、3D手办、马克杯、帆布袋、笔记本等" },
    { id: 104, title: "游戏手办设计", category: "merchandise", author: "@gaming", tags: ["手办", "游戏"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225954141.jpeg", prompt: "《使命召唤》中的König 1/7比例商业化人物手办，写实风格，粉色系少女风电竞房" },
    { id: 105, title: "爱马仕联名设计", category: "merchandise", author: "@luxury", tags: ["联名", "奢侈品"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225955201.jpeg", prompt: "生成一张爱马仕和jellycat的联名包海报，融合毛绒玩偶质感和爱马仕橙" },
    { id: 106, title: "漫画分镜创作", category: "comic", author: "@manga", tags: ["漫画", "分镜"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121225957322.jpeg", prompt: "生成一张五条悟的竖版黑白漫画分镜图" },
    { id: 107, title: "动漫角色对话", category: "comic", author: "@anime", tags: ["对话", "分镜"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230000304.jpeg", prompt: "动漫角色的对话场景，富有张力的分镜" },
    { id: 108, title: "多人漫画场景", category: "comic", author: "@group", tags: ["多人", "漫画"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230003277.jpeg", prompt: "多个动漫角色在同一场景中的漫画分镜" },
    { id: 109, title: "名人金句卡片", category: "quote", author: "@celebrity", tags: ["名人", "金句"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230004596.jpeg", prompt: "生成人物金句卡，保持人像一致性" },
    { id: 110, title: "Steve Jobs金句", category: "quote", author: "@jobs", tags: ["Jobs", "名言"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230007030.jpeg", prompt: "一张宽的名人金句卡，棕色背景，衬线体浅金色'保持饥饿, 保持愚蠢'" },
    { id: 111, title: "家具摆放设计", category: "interior", author: "@home", tags: ["家具", "室内设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230009496.jpeg", prompt: "把五个家具的照片融洽地放到一个屋子里" },
    { id: 112, title: "整栋房屋设计", category: "interior", author: "@architecture", tags: ["建筑", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230010728.jpeg", prompt: "帮室内设计师设计整栋房子" },
    { id: 113, title: "创意Logo设计", category: "logo", author: "@branding", tags: ["Logo", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230012578.jpeg", prompt: "制作6个毛绒质感的创意Logo，每个Logo都是一个动物的英语单词" },
    { id: 114, title: "咖啡拉花艺术", category: "food", author: "@coffee", tags: ["咖啡", "拉花"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230016694.png", prompt: "生成一张动漫Chiikawa中的小八的咖啡拉花图" },
    { id: 115, title: "创意拉花图案", category: "food", author: "@latte", tags: ["拉花", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230017514.jpeg", prompt: "动漫人物的咖啡拉花艺术" },
    { id: 116, title: "抖音短视频截图", category: "social", author: "@douyin", tags: ["抖音", "短视频"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230017886.jpeg", prompt: "生成一张抖音竖屏短视频的单帧截图，内容是在厨房里准备帝王蟹" },
    { id: 117, title: "美食制作视频", category: "social", author: "@cooking", tags: ["美食", "视频"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230019674.jpeg", prompt: "抖音短视频单帧截图，厨师捧着帝王蟹的动作" },
    { id: 118, title: "游戏模拟器界面", category: "ui", author: "@gaming", tags: ["游戏", "模拟器"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230020177.jpeg", prompt: "生成一个正在macOS上用游戏模拟器玩《我的世界》的截图" },
    { id: 119, title: "游戏角色植入", category: "game", author: "@gaming", tags: ["游戏", "植入"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230020834.jpeg", prompt: "把Tim Cook做到游戏画面里，还把苹果手机和苹果体验店都搬了进来" },
    { id: 120, title: "星巴克制作流程图", category: "infographic", author: "@coffee", tags: ["星巴克", "流程图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230021873.jpeg", prompt: "制作一张信息图，展示如何制作星巴克焦糖玛奇朵" },
    { id: 121, title: "流程图翻译", category: "translation", author: "@translate", tags: ["翻译", "流程图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230022669.jpeg", prompt: "把上图翻译成中文" },
    { id: 122, title: "古语翻译", category: "translation", author: "@classical", tags: ["古语", "翻译"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230023646.jpeg", prompt: "古语翻译和现代化表达" },
    { id: 123, title: "文字清晰化", category: "text", author: "@ocr", tags: ["文字", "识别"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230024444.jpeg", prompt: "让文字更清晰、可读性更高一些" },
    { id: 124, title: "技术图纸绘制", category: "technical", author: "@drawing", tags: ["技术", "图纸"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230025823.jpeg", prompt: "绘制此图的技术图纸" },
    { id: 125, title: "Transformer原理图", category: "infographic", author: "@ai", tags: ["AI", "Transformer"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230026854.jpeg", prompt: "制作一张信息图，解释Transformer LLM的工作原理" },
    { id: 126, title: "白板教学演示", category: "education", author: "@edu", tags: ["教学", "白板"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230027336.jpeg", prompt: "让Youtube顶流教育博主Eddie Woo在白板上讲解原理图" },
    { id: 127, title: "二次元角色走进现实", category: "fusion", author: "@anime", tags: ["动漫", "现实"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230028061.jpeg", prompt: "请将图中右侧第二个说话的人替换成附图中的动漫女孩，并保持姿势不变" },
    { id: 128, title: "动漫角色融合", category: "fusion", author: "@blend", tags: ["融合", "动漫"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230028576.jpeg", prompt: "二次元角色与真人场景的融合" },
    { id: 129, title: "乔布斯上海打卡", category: "scene", author: "@travel", tags: ["旅行", "历史"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230030470.png", prompt: "乔布斯穿着高领毛衣和蓝色牛仔裤，在上海南京西路上打卡拍照" },
    { id: 130, title: "经纬度生图", category: "location", author: "@location", tags: ["地理", "定位"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230031261.png", prompt: "输入经纬度和时间生成特定地点的街景图" },
    { id: 131, title: "产品多角度渲染", category: "product", author: "@rendering", tags: ["3D", "产品"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230031902.png", prompt: "用这个logo制作一件周边套头卫衣，4个不同动态视图" },
    { id: 132, title: "AI新榜纳斯达克", category: "creative", author: "@satire", tags: ["创意", "讽刺"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230032720.jpeg", prompt: "AI新榜直接纳斯达克上市的宣传图" },
    { id: 133, title: "纳斯达克上市庆祝", category: "creative", author: "@celebration", tags: ["庆祝", "金融"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251121230040485.png", prompt: "有了AI，梦到什么生什么" },

    // Part 5: Lovart Agent 高级应用案例
    { id: 134, title: "动漫角色与写实场景融合", category: "fusion", author: "@lovart", tags: ["动漫", "写实", "多角色", "场景融合"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194505414.png", prompt: "为这个写实的实景场景房间添加多位性格各异的动漫风格女孩，确保房间是写实风格，只有少女为动漫风格。\n\n具体的生成步骤是：先帮我生成一个【XX】 环境的照片。然后基于这张环境图片，添加【7个】动漫人物，氛围要【热闹】。 输出格式： 请分行详细描述每个人的【装扮 + 动作表情 + 所在位置】" },

    { id: 135, title: "基于经纬度的实时地点生图", category: "location", author: "@lovart", tags: ["地理定位", "实时信息", "天气"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194506140.jpeg", prompt: "创建一幅经纬度位于40.00023661635351, 116.27808154448789并且符合当地当前时间氛围和实时天气的图像，在照片左下角用优美的排版写上当前经纬度以及位置信息和天气图标，并加上一句中文位置介绍文案。" },

    { id: 136, title: "人物地点打卡照片生成", category: "location", author: "@lovart", tags: ["打卡", "人物", "地点", "服装匹配"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194506471.jpeg", prompt: "用 Nano Banana Pro 为这个人物创建一幅经纬度位于44.72067014987598, -110.85475719935745 并且符合当地当前时间氛围和实时天气的打卡照片，这个里边他的衣服穿着，需要根据所在地的这个风格去匹配。比如说雪山，它就是登山的衣服。比如说在都市里，它就是比较休闲的衣服， 在照片左下角用优美的排版写上当前经纬度以及位置信息和天气图标，并加上一句位置介绍文案。" },

    { id: 137, title: "手绘板书风格 PPT 生成", category: "presentation", author: "@lovart", tags: ["PPT", "手绘", "教育", "板书"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194506808.jpeg", prompt: "帮我根据下面这个文章做一套中学生都能理解的PPT。\n\n先写1个PPT大纲，规划出每一页的PPT的内容。\n\n然后将每一页的PPT内容分别扔给Nana Banana pro生成对应页面的PPT，需要确保风格一致。\n\nPPT的具体风格应改为教授手写拼贴画和白板风格。\n\n文字和图像都由 Nano Banana Pro 生成，另外不要将PPT 变成一整张图，一页一张生成。\n\n文章内容为：「此处填写文章内容」" },

    { id: 138, title: "迪特拉姆斯极简风格 PPT", category: "presentation", author: "@lovart", tags: ["PPT", "极简", "设计", "迪特拉姆斯"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194506952.jpeg", prompt: "帮我根据下面这个文章做一套中学生都能理解的PPT。\n\nPPT的具体风格应该为迪特拉姆斯的设计风格（Dieter Rams）。\n\n主色调: 哑光白、浅灰、黑色。\n\n点缀色: 鲜艳的橙色和绿色。\n\n表面通常干净、平滑，没有任何多余的装饰性纹理。\n\n严谨的网格系统布局。圆角矩形，具有数学般的美感。" },

    { id: 139, title: "英雄联盟 UI 风格 PPT", category: "presentation", author: "@lovart", tags: ["PPT", "游戏", "UI", "英雄联盟"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194507223.jpeg", prompt: "帮我根据下面这个文章做一套中学生都能理解的PPT。\n\nPPT的具体风格应该为英雄联盟的游戏UI风格。\n\n文字和图像都由 Nano Banana Pro 生成，另外不要将PPT 变成一整张图，一页一张生成。" },

    { id: 140, title: "Bento便当盒风格 PPT", category: "presentation", author: "@lovart", tags: ["PPT", "便当盒", "模块化", "科技"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194507394.jpeg", prompt: "帮我根据下面这个论文介绍做一套中学生都能理解的PPT。\n\nPPT的具体风格应该为Bento grid layout,苹果总结幻灯片风格，模块化设计，圆角方块，UI 界面仪表盘，柔和阴影，有组织的构图，信息图表风格，深色模式，科技产品功能总结，等轴测视图。" },

    { id: 141, title: "赛博手绘风格 PPT", category: "presentation", author: "@lovart", tags: ["PPT", "赛博朋克", "手绘", "故事性"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194508177.jpeg", prompt: "帮我根据下面这个文章做一套中学生都能理解的PPT。\n\nPPT的具体风格应该为图形记录风格，手写赛博朋克风，适当增加故事性的图像和图表。\n\n文字和图像都由 Nano Banana Pro 生成，另外不要将PPT 变成一整张图，一页一张生成。" },

    { id: 142, title: "未来感数字名片生成", category: "design", author: "@lovart", tags: ["名片", "数字", "未来感", "赛博"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204027335.png", prompt: "生成一张逼真的照片，展示一只手拿着一张透明的未来感玻璃卡片，卡片上显示的是我的社交媒体个人资料界面。卡片在粉红、紫色和蓝色的渐变霓虹灯光下发光。背景是深色且模糊的，以突出发光的边缘。玻璃卡片上显示着卡通风格的个人照片、认证徽章、用户名、昵称、年龄、项目信息、网站、加入日期和粉丝统计。手指上的灯光反射看起来电影感十足且充满情绪，给人一种高科技全息的感觉。超逼真，8K 细节，景深，赛博美学。" },

    { id: 143, title: "植物介绍卡片批量生成", category: "education", author: "@lovart", tags: ["植物", "介绍", "卡片", "批量"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204028614.png", prompt: "根据提供的10种不同绿植图片，一次性生成这10种植物的介绍卡片，包含植物名称、特征描述、养护要点等详细信息。" },

    { id: 144, title: "菜单实时翻译标注", category: "translation", author: "@lovart", tags: ["菜单", "翻译", "标注", "无违和感"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204028733.jpeg", prompt: "给这个菜单旁边标注中文，中文要跟其他文字字体一样，看上去没有违和感" },

    { id: 145, title: "流体动力学原理图解", category: "education", author: "@lovart", tags: ["物理", "流体动力学", "原理", "图解"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204035982.png", prompt: "制作一幅插图说明图，详细解释图中所展示的流体动力学原理以及接下来会发生什么。" },

    { id: 146, title: "鸡蛋浮力实验图解", category: "education", author: "@lovart", tags: ["物理", "浮力", "实验", "鸡蛋"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204041390.jpeg", prompt: "如果在水中加入大量盐，鸡蛋会发生什么变化" },

    { id: 147, title: "软件教程标注生成", category: "education", author: "@lovart", tags: ["教程", "标注", "截图", "操作指南"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204043005.png", prompt: "我想写个教程，请你帮我在图片中模拟截图之后使用微信编辑工具进行标注（红框+红色箭头+红色文字），标注出创建知识库、新建应用、新建插件的位置，并简单讲解" },

    { id: 148, title: "韦斯·安德森风格构图", category: "style", author: "@lovart", tags: ["韦斯·安德森", "对称", "粉彩", "复古"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204045019.png", prompt: '帮我生成一张图：对称构图，居中拍摄，古怪的粉彩粉色酒店大堂，穿着紫色制服的门童静止站立，他手里拿着一把伞，伞上面写着毛笔书法字体"文艺复兴"，字体完美的贴合在雨伞的材质上，复古家具，平光，粉彩配色，异想天开的氛围，韦斯·安德森风格，35mm胶片颗粒。横版16:9比例' },

    { id: 149, title: "吉卜力风格动画场景", category: "anime", author: "@lovart", tags: ["吉卜力", "动画", "自行车", "海洋"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204048016.png", prompt: "动漫风格，吉卜力工作室美学，俯瞰蓝色海洋的草坡，巨大的积云，骑自行车的女孩，鲜艳的绿色和蓝色，手绘背景纹理，柔和阴影，宁静氛围，高质量2D动画。" },

    { id: 150, title: "奇幻电影海报生成", category: "poster", author: "@lovart", tags: ["电影", "海报", "奇幻", "冒险"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204049412.png", prompt: '帮我生成一张超现实主义风格的奇幻电影海报，电影名称是"傻瓜阿望的奇妙旅途"，电影的主角是一个身穿蓝色校服的小孩，参考国内外优秀电影海报的审美和创意来进行设计，主体文字字体偏可爱神秘，可以加入一些英文来辅助设计排版，画面比例为横版16:9' },

    { id: 151, title: "废土末日荒原场景", category: "scene", author: "@lovart", tags: ["废土", "末日", "荒原", "电影感"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204054688.png", prompt: "广角镜头，废土末日荒原，埋在沙子里的生锈汽车，远处的废墟摩天大楼，背着背包的孤独流浪者，沙尘暴逼近，低饱和度，疯狂的麦克斯狂暴之路风格，史诗般的电影构图。" },

    { id: 152, title: "太阳系行星科普图", category: "education", author: "@lovart", tags: ["科普", "太阳系", "行星", "天文"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204100624.png", prompt: "给我展示一个太阳系图表，并用中文给每个行星标注一个有趣的事实" },

    { id: 153, title: "硅谷夜宴图-古风工笔画", category: "traditional", author: "@lovart", tags: ["古风", "工笔画", "硅谷", "讽刺"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204102185.png", prompt: "一幅充满讽刺和超现实主义的中国工笔重彩画杰作，题为《硅谷夜宴图》。它模仿《韩熙载夜宴图》的构图，但主角是身着宋代贵族服饰的现代科技巨头。写实与古画的无缝融合，质感是带有裂纹和褪色的陈旧绢本（仿古效果）。" },

    { id: 154, title: "病毒性感冒科普长图", category: "education", author: "@lovart", tags: ["科普", "病毒", "感冒", "信息图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204104172.png", prompt: "高质量的平面摄影作品，创建一个简单的 DIY 病毒性感冒图表长图，排列在干净、浅灰色纹理的背景上。视觉故事从左到右以清晰的步骤流动：内容包含定义、症状、传播途径、高危人群、不能做的事、正确恢复方式、何时就医、预防措施。" },

    { id: 155, title: "王家卫重庆森林海报", category: "poster", author: "@lovart", tags: ["王家卫", "重庆森林", "电影", "复古"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204105082.jpeg", prompt: "生成-张16:9比例的王家卫 重庆森林电影 的复古港风电影海报图片" },

    { id: 156, title: "医疗进化史诗三栏图", category: "medical", author: "@lovart", tags: ["医疗", "进化", "三栏", "史诗"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204105726.png", prompt: "best quality, masterpiece, ultra detailed, 8K, panoramic triptych (三栏全景), seamless transition (平滑过渡), medical history evolution (医疗史演变), ancient to future (古代到未来)\n\n左侧（古代智慧：草本与针灸）：traditional Chinese ink wash illustration, warm sepia tones, ancient architecture\n中间（现代实践：科技与标准）：photorealistic, modern urban background, paramedics in uniforms\n右侧（未来展望：智能与互联）：cyberpunk futuristic, holographic interface, neon blue light\n\nglowing light streams connecting three sections, cohesive color gradient (统一的色彩渐变：暖→冷→蓝), dynamic composition (动态构图)" },

    { id: 157, title: "老年渔夫特写肖像", category: "portrait", author: "@lovart", tags: ["肖像", "老人", "渔夫", "特写"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204046239.png", prompt: "老年渔夫特写肖像，饱经风霜的脸，深皱纹，皮肤纹理细节，眺望远方，自然阳光，海洋背景虚化，原始照片风格，富士胶片拍摄，逼真的眼睛，高细节，85mm镜头。" },

    { id: 158, title: "孟菲斯风格活动海报", category: "poster", author: "@lovart", tags: ["孟菲斯", "活动", "海报", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204106620.png", prompt: "用Lovart生成了一张孟菲斯风格的活动宣传海报" },

    // Part 6: 更多精选创意案例
    { id: 159, title: "圣诞冷艳时尚大片", category: "poster", author: "@christmas", tags: ["圣诞", "时尚", "大片", "高级"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "高级时尚感的妆容，采用金属质感的妆面，眼影是香槟金色渐变到玫瑰金，眼角延伸出精致的金色眼线，下眼睑点缀碎钻如冰晶闪烁。身着改良版现代圣诞服，采用不对称设计，背景是纯白色摄影棚布置成的圣诞场景，巨大的白色圣诞树装饰着金色装饰球、灯串和星星。" },
    { id: 160, title: "Spotify AR音乐卡片", category: "creative", author: "@ar", tags: ["AR", "音乐", "Spotify", "电影级"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "梦幻般的电影级增强现实视觉效果，众多悬浮的 Spotify 播放器界面卡片围绕着中心人物旋转。卡片使用了 Apple Music/Spotify 的原汁原味用户界面元素，呈现出半透明的磨砂玻璃美感，散发出柔和的漫射光晕。" },
    { id: 161, title: "品牌跨界快餐店偶遇", category: "creative", author: "@crossover", tags: ["跨界", "品牌", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Imagine [CHARAKTER 1] and [Charakter 2] casually sitting together at a table in a [FAST FOOD BRAND] restaurant. The atmosphere is relaxed and light-hearted." },
    { id: 162, title: "3D卡通钥匙扣设计", category: "product", author: "@3d", tags: ["3D", "钥匙扣", "卡通", "��爱"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a 3D cute cartoon keychain design of [SUBJECT]. The keychain should have a charming, adorable appearance with a smooth, rounded plastic texture and soft, vibrant colors." },
    { id: 163, title: "毛绒玩具风格设计", category: "product", author: "@plush", tags: ["毛绒", "玩具", "可爱", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a high-quality, adorable plush toy design of [SUBJECT]. The toy should have soft, fuzzy textures, gentle stitching details, and a warm, huggable appearance." },
    { id: 164, title: "3D纸艺折纸模型", category: "creative", author: "@origami", tags: ["纸艺", "折纸", "3D", "艺术"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a stunning 3D origami art piece of [SUBJECT]. The design should feature clean, sharp geometric folds that capture the essence of the subject." },
    { id: 165, title: "Q版木雕人偶", category: "creative", author: "@wood", tags: ["木雕", "人偶", "Q版", "可爱"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a charming Q-version wooden puppet of [SUBJECT]. The puppet should have cute, exaggerated proportions with a large head and small body." },
    { id: 166, title: "高端平铺式产品摄影", category: "product", author: "@commercial", tags: ["产品", "摄影", "平铺", "商业"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "A professional flat lay product photograph of [PRODUCT] arranged artistically on [SURFACE]. The composition should follow the rule of thirds with careful attention to negative space." },
    { id: 167, title: "沙与风产品摄影", category: "product", author: "@sand", tags: ["产品", "沙", "风", "电影级"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "A cinematic product shot of [PRODUCT] partially buried in pristine white sand. Fine particles of sand are captured mid-air, swirling around the product." },
    { id: 168, title: "微缩场景模型", category: "scene", author: "@miniature", tags: ["微缩", "模型", "场景", "怀旧"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a miniature diorama scene of [SCENE]. Everything should appear tiny and scaled down, as if part of a model train set or miniature collection." },
    { id: 169, title: "透明容器里的微缩世界", category: "scene", author: "@glass", tags: ["透明", "容器", "微缩", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "A miniature 3D world encapsulated within a transparent glass container. Inside the container, there's a tiny scene with detailed tiny elements." },
    { id: 170, title: "涂鸦线条干刷色块", category: "style", author: "@graffiti", tags: ["涂鸦", "线条", "干刷", "艺术"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "A mixed media artwork combining expressive doodle line art with bold dry brush color blocks. Use energetic, spontaneous black ink doodle lines." },
    { id: 171, title: "专业知识信息图", category: "infographic", author: "@info", tags: ["信息图", "科普", "教育", "专业"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a professional infographic about [TOPIC]. The design should be clean, modern, and educational. Use a cohesive color scheme." },
    { id: 172, title: "技术图纸展示板", category: "technical", author: "@technical", tags: ["技术", "图纸", "工程", "专业"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "A technical drawing sheet showing [OBJECT] in multiple views. Include front view, side view, top view, and an isometric view. Use precise black technical lines." },
    { id: 173, title: "动感雕塑", category: "creative", author: "@kinetic", tags: ["雕塑", "动感", "金属", "艺术"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "A kinetic sculpture of a [subject], made of interlocking metal rods and panels in brushed [color1] and oxidized [color2]. Suspended in motion, with rotating parts casting mechanical shadows." },
    { id: 174, title: "毛毡纹理Logo", category: "logo", author: "@felt", tags: ["Logo", "毛毡", "纹理", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Transform your logo into a felt texture design. The logo should have soft, fuzzy fabric appearance with visible stitch details along the edges." },
    { id: 175, title: "霓虹灯发光动物", category: "creative", author: "@neon", tags: ["霓虹", "动物", "发光", "可爱"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create adorable neon-lit animals of [SUBJECT]. Each animal should be outlined in glowing neon tubes with vibrant colors against a dark background." },
    { id: 176, title: "复古蓝图插图", category: "technical", author: "@blueprint", tags: ["蓝图", "复古", "技术", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a vintage blueprint-style illustration of [SUBJECT]. Use classic blueprint blue background with white technical lines and measurements." },
    { id: 177, title: "像素UI图标", category: "ui", author: "@pixel", tags: ["像素", "UI", "复古", "图标"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create retro pixel art UI icons of [SUBJECT]. Each icon should have a limited color palette and visible pixel edges, reminiscent of 8-bit or 16-bit game graphics." },
    { id: 178, title: "粘土3D图标", category: "design", author: "@clay", tags: ["粘土", "3D", "图标", "可爱"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create adorable 3D clay-style icons of [SUBJECT]. Each icon should look like it's made of soft, moldable clay with visible fingerprint textures and rounded edges." },
    { id: 179, title: "剪纸艺术风格", category: "style", author: "@paper", tags: ["剪纸", "艺术", "传统", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create intricate paper-cut art style illustration of [SCENE]. The design should feature delicate cutout patterns with negative space creating the image." },
    { id: 180, title: "3D蒸汽朋克Logo", category: "logo", author: "@steampunk", tags: ["蒸汽朋克", "Logo", "3D", "复古"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a 3D steampunk-style logo of [LETTER/SHAPE]. Incorporate brass gears, steam pipes, clockwork mechanisms, and vintage industrial elements." },
    { id: 181, title: "透明扭蛋场景模型", category: "product", author: "@gashapon", tags: ["扭蛋", "透明", "场景", "可爱"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a transparent gashapon capsule containing a miniature scene of [CONTENT]. The capsule should be clear plastic with subtle reflections, showing the detailed miniature inside." },
    { id: 182, title: "钩针玩偶", category: "product", author: "@crochet", tags: ["钩针", "玩偶", "手工", "可爱"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create an adorable crochet amigurumi doll of [CHARACTER]. The doll should have visible yarn stitch textures, button eyes, and a handcrafted, cozy appearance." },
    { id: 183, title: "品牌平面纸风格", category: "design", author: "@paper", tags: ["纸", "品牌", "平面", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a brand illustration using flat paper style. Cut paper shapes layered to create [SCENE], with subtle shadows between layers to add depth." },
    { id: 184, title: "Airbnb风格图标", category: "logo", author: "@airbnb", tags: ["图标", "Airbnb", "风格", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a set of icons in Airbnb's illustration style. Soft, rounded shapes, pastel colors, playful and friendly aesthetic for [THEME]." },
    { id: 185, title: "乐高风格套装", category: "creative", author: "@lego", tags: ["乐高", "积木", "玩具", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a LEGO-style building set of [OBJECT]. Show individual bricks, instruction booklet style, and the final assembled model on a display base." },
    { id: 186, title: "装饰艺术未来主义", category: "style", author: "@artdeco", tags: ["装饰艺术", "未来主义", "复古", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create an Art Deco futurism illustration of [SCENE]. Combining 1920s Art Deco geometric patterns with futuristic elements and metallic gold accents." },
    { id: 187, title: "霓��玻璃发光", category: "creative", author: "@neon", tags: ["霓虹", "玻璃", "发光", "艺术"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create neon signs made of glass tubes spelling [TEXT]. The glass should have realistic tube bend effects, electrode connections, and vibrant glow against a brick wall." },
    { id: 188, title: "浮雕艺术风格", category: "style", author: "@relief", tags: ["浮雕", "艺术", "3D", "复古"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a relief sculpture art piece of [SUBJECT]. The design should have raised 3D elements against a flat background, reminiscent of coin relief or commemorative plaques." },
    { id: 189, title: "夜视仪效果", category: "style", author: "@nightvision", tags: ["夜视", "绿色", "军事", "效果"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a night vision camera view of [SCENE]. Green monochrome color grading, scan lines, camera overlay text, and that characteristic night vision glow." },
    { id: 190, title: "无声电影场景", category: "movie", author: "@silent", tags: ["无声电影", "复古", "黑白", "电影"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "Create a silent film era scene of [ACTION]. Black and white film grain, exaggerated acting expressions, intertitle text cards, and 1920s period aesthetic." },
,

    { id: 121, title: "文艺复兴时期的解剖学研究", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125121.png", prompt: "A Renaissance anatomical study of a [subject], meticulously illustrated in fine graphite and ink cross-hatching, with transparent tissue overlays revealing skeletal and muscular systems. Labeled in elegant Latin calligraphy and presented on aged parchment, the composition exudes scholarly precision ..." },
    { id: 122, title: "史莱姆制成的玩具运输车", category: "product", author: "@community", tags: ["玩具"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125122.png", prompt: "{\n  \"style\": \"Realistic 3D render\",\n  \"material\": \"Glossy slime-like material\",\n  \"texture\": [\"smooth\", \"soft\", \"stretchy\", \"shiny\"],\n  \"color\": \"VARIABLE\",  \n  \"object_type\": \"VARIABLE\",  \n  \"background\": \"plain white\",\n  \"lighting\": \"soft studio lighting\",\n  \"details\": {\n    \"focus\": \"single objec..." },
    { id: 123, title: "植物雕塑", category: "creative", author: "@community", tags: ["雕塑"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125123.png", prompt: "The [subject] appears as if organically grown from intertwining plants, flowers, and vines. Leaf-like textures and blooming forms fuse seamlessly with anatomical or structural details, creating a surreal hybrid of nature and design. The composition feels ethereal, with natural asymmetry and dreamlik..." },
    { id: 124, title: "磨砂模糊剪影", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125124.jpeg", prompt: "A black and white photograph shows the blurred silhouette of a [SUBJECT] behind a frosted or translucent surface. The [PART] is sharply defined and pressed against the surface, creating a stark contrast with the rest of the hazy, indistinct figure. The background is a soft gradient of gray tones, en..." },
    { id: 125, title: "时尚品牌娃娃", category: "logo", author: "@community", tags: ["品牌","时尚"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125125.png", prompt: "A hyper-realistic photograph of a fashion doll styled in the aesthetic of [BRAND], sitting on a plush, cream-colored bed with soft folds. The doll’s look reflects the brand’s signature elements — from hair and outfit to accessories — arranged thoughtfully to evoke a dreamy, vintage-inspired editoria..." },
    { id: 126, title: "重新构想的超现实主义广告", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125126.jpeg", prompt: "“[Product Name]” placed at the center in full photorealism, surrounded by surreal vector illustrations using exactly two bold, vibrant colors that match the product’s mood.\nThe scene is minimalistic yet energetic, with abstract vector shapes (symbols, lines, expressions, etc.) orbiting or interactin..." },
    { id: 127, title: "符号冲突", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125127.png", prompt: "A surreal yet hyper-realistic image in levitation photography style, where elements of [subject] float chaotically and randomly above an outstretched hand, interwoven with symbolic elements that directly oppose it.\n\nThe background forms dynamically to visually embody the symbolism of the subject and..." },
    { id: 128, title: "一个字的无限反射", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125128.png", prompt: "A [PERSON] in a dark room with a glowing projection of the word “[WORD]” repeated endlessly across the walls and body. The text is projected in high-contrast, neon [COLOR], wrapping around the contours of the object, creating a surreal, futuristic lighting effect. The background and object are seaml..." },
    { id: 129, title: "创建悬浮切片水果", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125129.jpeg", prompt: "A hyper-realistic photograph of a [FRUIT] sliced into five glossy layers, each slice floating vertically in mid-air with glistening juice droplets at the edges. The slices cast soft, natural shadows on each other. The [FRUIT] has a vibrant skin with appropriate interior details .Set against a softly..." },
    { id: 130, title: "创建超现实不可能的图像", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125130.jpeg", prompt: "Create a surreal split-scene where the left half is an underwater version of a [SCENE], filled with marine life (fish, sharks, octopus, coral, bubbles), and the right half is the regular dry version of the same [SCENE] continuing naturally. Separate the two halves with a vertical wall of water held ..." },
    { id: 131, title: "自定义毛绒钥匙扣", category: "product", author: "@community", tags: ["毛绒","钥匙扣"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125131.jpeg", prompt: "Close-up photo of a small plush keychain of [attached image/emojis]  held gently between two fingers, made of soft felt or fuzzy material, cartoon-style proportions, embroidered face with simple expressive features, character designed to resemble, attached to a shiny silver keyring, neutral beige ba..." },
    { id: 132, title: "悬浮魔幻现实主义", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125132.jpeg", prompt: "An old-fashioned postal shack floating on a space rock, with envelopes fluttering like wings and planets lined up as waiting customers - humorous, magical realism." },
    { id: 133, title: "幽灵形态", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125133.png", prompt: "A hyper-realistic photograph of a [SUBJECT] entirely made from a single, semi-rigid transparent material that drapes and folds like sheer plastic or molten glass. The object is fully recognizable in shape, yet ghostly and fluid, as if sculpted from air and frozen in motion. Set in a moody, industria..." },
    { id: 134, title: "生成真实电影海报", category: "poster", author: "@community", tags: ["电影","海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125134.jpeg", prompt: "“[MOVIE TITLE ]” — cinematic movie poster design in ultra-realistic, high-definition style. Capture a dramatic and emotionally charged scene based on the film’s title. Use a high Kelvin color temperature to eliminate yellow tint, favoring cold, bluish tones or neutral whites. Add volumetric fog, sha..." },
    { id: 135, title: "棱柱形玻璃图标", category: "logo", author: "@community", tags: ["图标","玻璃"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125135.jpeg", prompt: "Create a high-resolution illustration of a [skull] icon in the style of a glossy, translucent sculpture. The icon should appear as if made of curved, flowing glass with reflective surfaces. Infuse the form with vivid, refracted rainbow gradients that shift smoothly across its contours. The shape sho..." },
    { id: 136, title: "日常用品有皮肤", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125136.png", prompt: "A high-quality studio photograph of a [OBJECT] fully covered in ultra-realistic [ANIMAL] texture (e.g., fur, feathers, skin, or scales), placed against a soft neutral background. The object’s original form remains visible but is wrapped in the animal’s natural pattern and surface detail. The image f..." },
    { id: 137, title: "透视一切", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125137.jpeg", prompt: "a fully transparent [product] made of ultra-clear iridescent glass, showing all internal components in photorealistic detail. The outer shell is glossy, refracts subtle rainbow colors, and reveals the product’s structure and mechanics. Scene lit with high-Kelvin studio lighting (~7000K) on a neutral..." },
    { id: 138, title: "Gumroad样式图标", category: "logo", author: "@community", tags: ["图标"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125138.jpeg", prompt: "Create a high-resolution illustration of a [OBJECT] icon in the style of a flat, outlined sticker graphic. The icon should be made entirely from very thin, solid black outlines with no interior fill. Add a bold, soft-edged sticker-style contour around the icon using a flat, vibrant [YELLOW, BLUE, OR..." },
    { id: 139, title: "将您最喜欢的品牌变成生活方式产品", category: "logo", author: "@community", tags: ["产品","品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125139.jpeg", prompt: "A high-quality studio product photo of a [brand name]-branded [product type], [floating / standing] against a solid background in the brand’s signature color. The product features the brand logo prominently and uses the official brand color palette. Clean composition, soft shadows, ultra-realistic m..." },
    { id: 140, title: "现代数字动漫风格", category: "style", author: "@community", tags: ["动漫","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125140.png", prompt: "Transform this image into a modern digital anime TV style. Use clean and sharp outlines, vivid and high-contrast colors, and digital cel shading with subtle gradients. Add visual effects like glows, particles, or light flares if appropriate. The character design should follow modern anime proportion..." },
    { id: 141, title: "监控级别的时尚洞察力", category: "fashion", author: "@community", tags: ["时尚"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125141.jpeg", prompt: "Create image with 1:1 ratio A cctv footage, \nA closed up view of focus woman carrying  [brand] [product] on street, a square zoomed window on the product, sci fi analyzing overlay UI with infos like brand name, date, time, location name, in brand color monospaced font, product name, width, height, w..." },
    { id: 142, title: "为任何品牌设计运动鞋", category: "logo", author: "@community", tags: ["品牌","设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125142.jpeg", prompt: "create image with 1:1 ratio   A branded footwear ad for [Brand], showcasing the high-end Brand shoe using brand technology and texture.(fiction a technology and texture based on brand DNA). The shoe is shown in dynamic floating perspective over a graph paper background layout with technical sketches..." },
    { id: 143, title: "迪士尼鸡尾酒", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125143.png", prompt: "A realistic, high-end cocktail in a frosted glass with a sparkling salt rim, filled with crystal-clear ice cubes. The drink is garnished with deep-blue kale leaves and delicate pastel-pink edible flowers. The lighting is moody and cinematic, with soft highlights on the glass. The entire visual style..." },
    { id: 144, title: "梦幻般的蒸汽波失真", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125144.png", prompt: "[SUBJECT] rendered in Dreamlike Vaporwave Distortion, with soft pastels and surreal effects. Employ a nostalgic color palette of [COLOR1] and [COLOR2] to evoke a sense of longing and ethereal beauty" },
    { id: 145, title: "用自己的审美下棋", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125145.png", prompt: "A highly realistic vertical photograph of a traditional chessboard viewed from above, set against a textured surface inspired by [COUNTRY]’s artistic heritage. The chessboard features intricate patterns and national motifs, with the word “[COUNTRY]” written across the board in elegant golden calligr..." },
    { id: 146, title: "全息叠加效果彩虹渐变", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125146.jpeg", prompt: "Apply a holographic overlay effect on [SUBJECT/TEXT] — dreamy rainbow gradients with soft radial light reflections — smooth glossy surface, high contrast blending — iridescent hues like pink, teal, cyan, and purple — noise texture with soft light blend — subtle shadows and edge lighting to add depth..." },
    { id: 147, title: "玻璃变形海报", category: "poster", author: "@community", tags: ["海报","玻璃"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125147.jpeg", prompt: "Design a cinematic brand poster featuring “[BRAND NAME]” — include a bold six-word slogan beneath — apply a 3D glass refraction effect that distorts part of the text or layout — incorporate the brand logo in the top corner — smooth shadows, glossy lighting, black extra-bold typography — clean modern..." },
    { id: 148, title: "怀旧午后阳光", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125148.jpeg", prompt: "a pillow fort in the backyard, shaded by a big old tree. Sunlight filters through the leaves, and a young boy and his golden retriever naps beside a tray of lemonade and cookies. Wind chimes tinkle gently in the breeze. Warm afternoon light, playful and nostalgic, children's book illustrated feeling" },
    { id: 149, title: "Gorillaz风格角色", category: "character", author: "@community", tags: ["角色","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125149.png", prompt: "Create a stylized full-body portrait of [your subject] in the Gorillaz character aesthetic. Give the character an exaggeratedly lanky build with long, skinny legs and narrow arms. Use simplified, angular features and thick, bold outlines. Style the hair to be spiky, tousled, or exaggerated, in a non..." },
    { id: 150, title: "乙烯基玩具", category: "product", author: "@community", tags: ["玩具"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125150.png", prompt: "A comic-style caricature illustration of [subject], with an oversized head and expressive eyes, rendered in a hyper-realistic vinyl toy aesthetic. The character features exaggerated proportions, glossy textures, and playful details, blending caricature art with collectible figure charm." },
    { id: 151, title: "Neoglo风格Logo", category: "logo", author: "@community", tags: ["Logo","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125151.jpeg", prompt: "Design a modern logo in NeoGradient Soft Tech style for a fictional startup called “NAME” in the “[INDUSTRY TYPE]” industry.\n\nThe logo must include:\n•A unique abstract icon\n•A clean, bold sans-serif logotype\n•Smooth glowing gradients blending vibrant colors like blue, purple, pink, orange, and teal\n..." },
    { id: 152, title: "新动漫风格", category: "style", author: "@community", tags: ["动漫","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125152.png", prompt: "Transform this image into a 1960s Tezuka-style illustration. Use big, rounded expressive eyes with bright highlights. Simplify the anatomy with soft, rounded limbs and clean linework. Avoid detailed textures — focus on smooth color fills and strong silhouettes. The final image should resemble a vint..." },
    { id: 153, title: "霓虹灯线框", category: "creative", author: "@community", tags: ["霓虹","霓虹灯"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125153.png", prompt: "A neon wireframe visualization of a [subject], traced in glowing [color1] and [color2] vector lines. Suspended in a digital void, the figure is surrounded by speed trails, motion blur, and shifting geometric shadows, evoking a sense of kinetic energy and futuristic momentum." },
    { id: 154, title: "五颜六色的针织", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125154.jpeg", prompt: "A hyper-realistic, artistic rendering of a [OBJECT] entirely wrapped in colorful, tightly woven yarn and embroidery threads. The surface is covered in intricate, detailed textile patterns—knit, braided, and woven in a variety of textures. Each section of the [OBJECT] is segmented with vivid, high-sa..." },
    { id: 155, title: "自己的国家地标时尚杂志", category: "fashion", author: "@community", tags: ["时尚"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125155.png", prompt: "a luxurious fashion magazine cover designed in the style of [COUNTRY], blending iconic landmarks, cultural symbols, and local fashion aesthetics. The layout mimics high-end editorial design, with headlines inspired by the country’s language, trends, and lifestyle. Sophisticated, cinematic lighting, ..." },
    { id: 156, title: "作为家具的著名地标", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125156.jpeg", prompt: "The [LANDMARK - Statue of Liberty/Eiffel Tower/Big Ben] perfectly carved and functional as a [FURNITURE_PIECE - lamp/bookshelf/coffee table], living room setting, normal scale furniture, photorealistic detail." },
    { id: 157, title: "最小天气小部件", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125157.jpeg", prompt: "create image with 1:1 ratio \nsurreal minimal aesthetic, airplane window frame on subtle gradient backdrop with same color, through the oval window showing random iconic landmark scenery of [Country Name], an overlay weather ui interface on the center of window, from top to bottom, contain the small ..." },
    { id: 158, title: "品牌3D卡通动物角色", category: "logo", author: "@community", tags: ["3D","卡通","品牌","角色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125158.png", prompt: "A high-quality 3D cartoon animal character inspired by [Brand Name], with large round eyes and an innocent, friendly expression. The character wears a knitted sweater featuring the brand name in bold letters. It sits confidently atop a futuristic vehicle shaped like a product from the brand, fully i..." },
    { id: 159, title: "渲染宝石", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125159.jpeg", prompt: "Recreate this image using the pamareters of the JSON provided.\n{\n  \"name\": \"Gemstone Render\",\n  \"object\": {\n    \"type\": \"auto\",\n    \"detected_color\": \"auto\",\n    \"form\": \"realistic, natural form preserved\",\n    \"material\": \"crystal or faceted gemstone glass\",\n    \"surface\": \"precision-cut facets, sh..." },
    { id: 160, title: "新动漫风格", category: "style", author: "@community", tags: ["动漫","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125160.png", prompt: "Transform this image into an over-the-top anime illustration in the style of Trigger / Gainax. Use exaggerated expressions, wild motion lines, and hyperdynamic poses. The anatomy should be fluid and distorted for emphasis — limbs stretching or snapping into action. Add speed lines, explosive backgro..." },
    { id: 161, title: "物品纹理处理", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125161.png", prompt: "retexture the image attached based on the JSON below:\n{\n  \"style_name\": \"Transparent Studio Render\",\n  \"visual_rules\": {\n    \"form\": {\n      \"shape\": \"preserve original object shape\",\n      \"outline\": \"no outlines, use smooth geometry transitions and bevels\"\n    },\n    \"lighting\": {\n      \"style\": \"..." },
    { id: 162, title: "超现实主义蒸汽波", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125162.png", prompt: "[SUBJECT] in a Surrealist Vaporwave collage. Combine elements of classical sculpture, 80s retrofuturism, and Japanese cityscapes. Use pastel shades of [COLOR1] and [COLOR2] with hints of neon" },
    { id: 163, title: "半透明玻璃物品ASMR", category: "scene", author: "@community", tags: ["透明","玻璃"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125163.jpeg", prompt: "Hyper-realistic [fruit name] made of translucent glass, smooth, rounded surface with fine air bubbles inside, placed on a clean surface, sharp lighting with strong reflections and highlights, minimal background, photorealistic, glossy texture, 3D render style, crystal-like appearance, soft shadows, ..." },
    { id: 164, title: "将表情符号变成纸板", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125164.png", prompt: "Ultra high-resolution 3D render of the emoji [🥹], meticulously recreated as a realistic cardboard sculpture. The object is crafted from corrugated brown cardboard, featuring clearly defined fluted edges, visible layering, and rough kraft paper textures. Close-up studio" },
    { id: 165, title: "用气泡膜覆盖表情符号", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125165.png", prompt: "A hyper-realistic 3D render of the emoji [❤️‍🔥], entirely wrapped in transparent bubble wrap. The plastic is tightly fitted, with clearly visible air-filled bubbles creating overlaid reflections and soft distortions of the emoji underneath. The wrap has a glossy, crinkled texture that catches the l..." },
    { id: 166, title: "几何禅", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125166.png", prompt: "[SUBJECT] illustrated in a Geometric Zen Tranquility style, where simplicity and balance are key. Utilize clean lines, basic shapes, and a serene color palette of [COLOR1] and [COLOR2] to evoke a sense of peace and harmony." },
    { id: 167, title: "液态金属设计产品", category: "product", author: "@community", tags: ["产品","设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125167.jpeg", prompt: "create image with 1:1 ratio \nretexture the photo I attached with the following json \n{   \"style_name\": \"hermes_subtle_specular_gradient\",   \"background\": {     \"type\": \"solid\",     \"color\": \"#000000\",     \"light_reflection\": \"none\"   },   \"base_material\": {     \"type\": \"polished_metal\",     \"color\":..." },
    { id: 168, title: "水果蜡烛", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125168.png", prompt: "A minimal still life of a round glass candle filled with [fruit], labeled “[SCENT NAME]”, placed on elegant white silk fabric. The candle glass is [glass color], and the wax matches the fruit color. The scene is softly lit by natural daylight with subtle shadows and smooth highlights. Hyperrealistic..." },
    { id: 169, title: "微型透明胶囊", category: "scene", author: "@community", tags: ["透明"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125169.png", prompt: "Close-up, A hand holding a transparent capsule, inside it is a miniature model of [character name], wearing [their iconic outfit and accessories]. The character is posed in a [specific, expressive or dynamic pose], interacting with the inner surface of the capsule, as if they are frozen or confined ..." },
    { id: 170, title: "新卡通风格", category: "anime", author: "@community", tags: ["卡通","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125170.png", prompt: "Transform this image into the Foster’s Home for Imaginary Friends cartoon style. Use bold outlines, flat shapes, and vivid solid colors. Characters should have simplified, playful designs with exaggerated expressions and unique silhouettes. Keep the background minimal or stylized with flat patterns ..." },
    { id: 171, title: "霓虹灯品牌重新构想", category: "logo", author: "@community", tags: ["霓虹","霓虹灯","品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125171.jpeg", prompt: "Create a cinematic advertisement for “[PRODUCT NAME]” — use bioluminescent neon lighting that matches the brand’s visual identity — place the product at the center of the scene with surreal, minimalistic composition — automatically adapt the environment to reflect the product’s nature (e.g. tech, fr..." },
    { id: 172, title: "棱柱形水晶", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125172.jpeg", prompt: "Recreate this image using the parameters of the JSON provided.\n{\n  \"style_transfer\": {\n    \"name\": \"Prismatic Crystal\",\n    \"description\": \"Applies a highly realistic prismatic crystal style to any object, using precise light dispersion and photographic clarity. Ideal for adding a premium, gem-like ..." },
    { id: 173, title: "复古风格图标", category: "traditional", author: "@community", tags: ["古风","复古","图标","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125173.jpeg", prompt: "Create an illustration of a [OBJECT] in a retro cartoon style. Use only flat, solid colors with no gradients, smudging, airbrushing, or blur. All shading and highlights should be made from clean, separate color blocks. Outline all shapes with thick, bold black lines. Use a simplified color palette (..." },
    { id: 174, title: "生成电影氛围图", category: "movie", author: "@community", tags: ["电影"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125174.png", prompt: "Cinematic still, A [ description of the character or action scene], with a [ background/environment], a dynamic angle, a [light effect or lighting condition], motion blur, high-resolution photography, a cinematic scene, cinematic lighting, and high contrast." },
    { id: 175, title: "半透明晶体效果", category: "scene", author: "@community", tags: ["透明"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125175.jpeg", prompt: "a [SUBJECT] rendered as a translucent crystalline form with beveled edges, subtly glowing from within. Surfaces catch and reflect ambient light, revealing faint iridescent hues across its contours in dark background" },
    { id: 176, title: "三维几何效果", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125176.jpeg", prompt: "A bison in the center of an array of colorful geometric shapes, surrounded by symbols representing different aspects like family and home. The artwork features warm colors in an oil painting style, with an Art Nouveau illustration showcasing ornate details and colorful patterns. The scene also inclu..." },
    { id: 177, title: "2D单词海报设计", category: "poster", author: "@community", tags: ["海报","设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125177.jpeg", prompt: "Create a surreal 2D poster design based on the word “[KEYWORD]” — the layout should be dominated by kinetic typography where the word is visually shaped or distorted to reflect its meaning — integrate a symbolic flat minimal illustration that reinforces the concept — the style must be inspired by ri..." },
    { id: 178, title: "生物发光", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125178.png", prompt: "[SUBJECT] depicted as a Mythical Creature Luminescence, with glowing edges that accentuate the fantastical and legendary aspects. Utilize [COLOR1] and [COLOR2] to enhance the mythical and enchanting qualities." },
    { id: 179, title: "创建多种3D风格头像", category: "creative", author: "@community", tags: ["3D","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125179.png", prompt: "Create a 3D-rendered digital illustration of a stylized cartoon boy character, standing in a neutral pose. The character should be rendered in a realistic-minimalist 3D style, with soft rounded proportions and plush matte textures — similar to high-end Cinema 4D + Redshift product renders." },
    { id: 180, title: "可爱粉彩乙烯基人物", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125180.png", prompt: "A cute pastel vinyl figure of [INSERT YOUR CHARACTER OR OBJECT], pastel colors (lavender, soft pink, baby blue), kawaii style with big round eyes and friendly smile, simple rounded shapes, stylized “RIP” detail somewhere on the figure or base, matching toy packaging in the background with themed art..." },
    { id: 181, title: "抽象液体排版文字", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125181.jpeg", prompt: "Abstract liquid typography spelling \"text\", made of thick, transparent water-gel with realistic refraction and soft shadows. Each letter appears sculpted from droplets with surface tension, smooth curves, and light reflections. Water droplets scattered on the surface, minimal background, hyper-reali..." },
    { id: 182, title: "鸟类羽毛制成LOGO", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125182.jpeg", prompt: "A detailed overhead shot of a fluid, colorful OpenAI logo created by arranging hundreds of naturally shed exotic bird feathers. Capture the incredible iridescence, delicate barbs, and varied textures against a misty white backdrop with side lighting." },
    { id: 183, title: "霓虹效果海报", category: "creative", author: "@community", tags: ["霓虹","海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125183.jpeg", prompt: "a single [OBJECT] glowing vividly with internal neon light that matches its brand or essence — the glow must follow the object’s shape and details precisely without overexposing — cinematic studio lighting — rich reflective surface or texture — subtle ambient fog or mist around the object — sharp sh..." },
    { id: 184, title: "乐高风格套装", category: "creative", author: "@community", tags: ["乐高","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125184.png", prompt: "a realistic LEGO-style set featuring [COUNTRY]’s national treasure: [ITEM]. Photorealistic packaging with LEGO branding, box art showing the built model, the model assembled from LEGO bricks in authentic colors and details. Studio product photography with soft shadows and clear lighting, highly deta..." },
    { id: 185, title: "人体工程学", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125185.png", prompt: "Imagine a [piece of furniture] designed in the form of [creature/object/concept]. The design should be highly creative and sculptural, like an art piece. Use organic, flowing shapes and detailed textures. Make sure it remains functional and ergonomic. The goal is for it to be both visually striking ..." },
    { id: 186, title: "装饰艺术大都会", category: "style", author: "@community", tags: ["装饰艺术"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125186.png", prompt: "[SUBJECT] set within an Art Deco Metropolis, showcasing the grandeur and geometric elegance of 1920s architecture. Use streamlined forms and ornamental details, highlighting a sophisticated color palette of [COLOR1] and [COLOR2] to reflect the prosperity of the era." },
    { id: 187, title: "新卡通风格", category: "anime", author: "@community", tags: ["卡通","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125187.png", prompt: "Transform this image into a classic Tex Avery / Looney Tunes cartoon style. Use bold, clean outlines and exaggerated character features — huge eyes, stretched limbs, and over-the-top facial expressions. Emphasize slapstick comedy and visual humor. Colors should be vibrant and flat, with high contras..." },
    { id: 188, title: "微型毛毡羊毛人物", category: "product", author: "@community", tags: ["毛毡"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125188.png", prompt: "A felted wool figure of a [subject], handcrafted with soft fibers, uneven stitching, and visible textures. Set within a miniature diorama of layered fabrics and pastel props, the scene radiates cozy, storybook charm like a still from a tactile, stop-motion fairytale made entirely of felt and thread." },
    { id: 189, title: "心爱的角色制作动漫风格的签名", category: "character", author: "@community", tags: ["动漫","角色","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125189.png", prompt: "A minimalistic black-and-white autograph design in a single-line drawing style, featuring the handwritten signature: [CHARACTER NAME], integrated with cute line art elements inspired by the character’s appearance and personality (for example: hair, outfit details, weapons, magical symbols). Include ..." },
    { id: 190, title: "品牌虚拟人物", category: "logo", author: "@community", tags: ["品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125190.png", prompt: "A fictional character shaped like a [Brand Name] product, wearing clothing that reflects the brand’s identity, sitting or riding on an oversized version of one of the brand's products as if it were a futuristic vehicle. The design features an expressive, dynamic artistic style full of motion and vib..." },
    { id: 191, title: "后世界末日氛围", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125191.jpeg", prompt: "a young cartoon boy with big goggles and scarf driving a tiny makeshift vehicle in the desert, cute post-apocalyptic vibe, indie animation style, soft colors, emotional and adventurous --ar 3:4 --raw --p" },
    { id: 192, title: "月光屋顶茶话会", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125192.jpeg", prompt: "A moonlight rooftop tea party between a girl and a boy, dreamy, gentle, painterly." },
    { id: 193, title: "将您的徽标放在月球上", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125193.jpeg", prompt: "Recreate [BRAND NAME] logo following my JSON aesthetic below:\n{\n\"role\": \"You are a lunar scene generator trained on NASA’s Apollo archives. Your task is to create a hyperrealistic image of an authentic Moon landing photo featuring a single flag on the lunar surface, with the uploaded logo or subject..." },
    { id: 194, title: "装饰艺术未来主义", category: "style", author: "@community", tags: ["装饰艺术","未来主义"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125194.jpeg", prompt: "create image with 1:1 ratio \n[Brand] ad. Ultra-high-detail product photo in a fusion of Art Deco and Futurism. The product rest on platforms.  Background features stylized Art Deco skyscraper silhouettes morphing into Futurist speed lines, forming a diagonal left-to-right composition. Surfaces use b..." },
    { id: 195, title: "经典的微型玩具风格", category: "product", author: "@community", tags: ["玩具","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125195.png", prompt: "A miniature version of [LOCATION], designed in a whimsical dollhouse style. The structure is surrounded by thematic natural elements and tiny architectural details that reflect its cultural context (e.g., plants, paths, decor). The color palette uses soft pastels (such as coral, blush, sand, mint, o..." },
    { id: 196, title: "字母景观", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125196.jpeg", prompt: "the letter B beautiful and elegant decorated with a beautiful beachscape" },
    { id: 197, title: "数字粘土雕塑", category: "creative", author: "@community", tags: ["粘土","雕塑"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125197.png", prompt: "A digital clay sculpture of a [subject], captured in a [pose/action], resting on a minimalist [color] plinth etched with organic swirl patterns. The sculpt features smooth, flowing curves and a tactile finish, rendered in a refined [color palette] that evokes a soft, contemporary aesthetic." },
    { id: 198, title: "可爱的设计师玩偶", category: "design", author: "@community", tags: ["设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125198.png", prompt: "A cute designer doll styled as a [SUBJECT]. The doll has a porcelain face with blush, soft curly white hair, and large expressive eyes with unique pupils (like a star and moon). It wears a fluffy pastel-colored costume resembling the [chosen creature or idea], with detailed accessories like a hood w..." },
    { id: 199, title: "自定义纹理的复古玩具", category: "product", author: "@community", tags: ["复古","玩具"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125199.png", prompt: "Retexture the uploaded image based on the JSON\n\n{\n  \"materials\": {\n    \"exterior\": \"matte injection-molded plastic\",\n    \"interior\": [\n      \"blocky colored plastic parts\",\n      \"oversized gears\",\n      \"simple rods\",\n      \"basic springs\",\n      \"toy decals\"\n    ]\n  },\n  \"lighting\": {\n    \"type\": ..." },
    { id: 200, title: "真人和风格对照直出", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125200.jpeg", prompt: "创建图片 {\n\"title\": \"真人 × 动画对照创意作品\",\n\"author\": \"ZH4O\",\n\"description\": \"一张利用垂直拼贴与留白，将同一人物的照片与插画并置的创意作品，突出媒介在语言、质感与情绪上的对比。\",\n\"layout\": {\n\"orientation\": \"vertical\",\n\"photo\": {\n\"position\": \"top-left\",\n\"aspect_ratio\": \"3:4\",\n\"style\": \"street photo\",\n\"camera_angle\": \"eye-level, slightly tilted left\",\n\"lens\": ..." },
    { id: 201, title: "纸上的小卡通角色", category: "anime", author: "@community", tags: ["卡通","角色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125201.jpeg", prompt: "Imagine you’re a tiny cartoon character who has come to life on a piece of paper! Draw yourself running away from a giant pencil that’s trying to erase you. Add colorful pencils, a desk, and maybe some flying eraser bits for extra excitement. Use your wildest imagination to make it look like you’re ..." },
    { id: 202, title: "创建半透明图标", category: "logo", author: "@community", tags: ["图标","透明"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125202.jpeg", prompt: "Create a 3D-rendered icon of [Subject] in a dreamy, translucent, glass-like plastic material with soft pink and purple hues. glossy, smooth, rounded edges, glowing highlights, and soft shimmer or sparkle effects. UI, floating against a clean white background with soft shadows and natural lighting, e..." },
    { id: 203, title: "3D表情符号头部", category: "creative", author: "@community", tags: ["3D"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125203.jpeg", prompt: "Generate a hyper-realistic 3D render of a [EMOJI🐱] as a floating animal head with plush toy aesthetics. The design should emphasize ultra-soft, long fur, playful cuteness, and a childlike charm. Use a straight-on camera angle with soft, diffused lighting to create a warm and inviting glow. Keep the..." },
    { id: 204, title: "黑客帝国的绿色代码", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125204.jpeg", prompt: "Transform this image into a digital Matrix-style scene. The background and subject should be composed of cascading neon green code on a black backdrop, similar to the iconic Matrix digital rain. Use glowing green symbols (Japanese katakana, numbers, and Latin letters), with some motion blur and dept..." },
    { id: 205, title: "以动物为灵感的品牌", category: "logo", author: "@community", tags: ["品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125205.png", prompt: "A high-quality studio photograph of a [BRAND + OBJECT] fully covered in ultra-realistic [ANIMAL] texture (e.g., fur, feathers, skin, or scales), placed against a soft neutral background. The object’s original shape, key design elements, and brand identity remain clearly visible beneath the animal’s ..." },
    { id: 206, title: "工业内部品牌广告", category: "logo", author: "@community", tags: ["品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125206.jpeg", prompt: "Create a hyperrealistic, surreal 1:1 advertisement for [Brand Name].\nTransform the product into a miniature industrial factory or laboratory from the inside.\nReveal detailed internal systems: pipes, workers, glowing fluids, steam, and machines — all functioning to reflect the product’s core purpose ..." },
    { id: 207, title: "超现实的高冲击力的图像", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125207.jpeg", prompt: "Create a hyperrealistic, high-impact image of a [subject] suspended mid-air, captured at the peak of an explosive moment. Surround it with dynamic [particles/splashes/fragments] that enhance motion and energy. macro-level detail, bold rim lighting, and a vibrant [background color] to emphasize form,..." },
    { id: 208, title: "逼真的产品照片", category: "product", author: "@community", tags: ["产品"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125208.jpeg", prompt: "A realistic product photo of a [brand name] [bottle or jar] sculpted entirely from fresh [ingredient name], arranged perfectly to form the shape of the original packaging, including a detailed and accurate label on the front. The background is a clean, soft light gray with a natural wooden surface. ..." },
    { id: 209, title: "吃掉你的文字", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125209.jpeg", prompt: "Create the word “[WORD]” made entirely from its real texture and styled using the identity of the most iconic brand associated with it.\n\nThe word should:\n• Visually reflect the material (e.g. honey, chocolate, soda, candy).\n• Use the brand’s signature colors and typography.\n• Include the brand logo ..." },
    { id: 210, title: "90年代风格的摔跤人物", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125210.jpeg", prompt: "Product photography, a 1990's style WWF Wrestling Figurine package with the figurine wrestler in the package being [your character]. The figure features bright colors, a detailed character design,  white background with professional studio lighting." },
    { id: 211, title: "灯泡中的城市", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125211.jpeg", prompt: "Create a hyper-realistic, stylish poster featuring a light bulb lying on wet urban asphalt. Inside the bulb, place a miniature version of [CITY] with its iconic landmarks. A sleek white 3D text of the city name ‘[CITY]’ should stand prominently in front of the bulb. The background is a softly blurre..." },
    { id: 212, title: "品牌在悬浮平台上", category: "logo", author: "@community", tags: ["品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125212.png", prompt: "A highly detailed cinematic advertisement scene featuring [TYPE OF ALCOHOL, BRAND], standing on a surreal floating platform that visually embodies its spirit. The platform is made of materials that represent the drink’s essence (e.g. sparkling crystals for champagne, rich dark wood for whiskey, fros..." },
    { id: 213, title: "3D蓬松的物体", category: "creative", author: "@community", tags: ["3D"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125213.jpeg", prompt: "Transform the [BRAND NAME] logo into a hyper-realistic, 3D fluffy object. Keep the original shape and exact brand colors. Cover the entire surface in soft, detailed fur with a realistic hair texture. Use cinematic lighting to create subtle backlighting and soft shadows, making the logo appear tactil..." },
    { id: 214, title: "部分咬掉的糕点", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125214.jpeg", prompt: "A high-resolution, studio-lit macro photograph of a pastry shaped like a [SUBJECT], with a partial bite taken out, placed on a neutral matte surface with visible crumbs and soft shadows, highlighting texture and detail" },
    { id: 215, title: "Gorillaz风格", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125215.png", prompt: "Restyle this image into a gritty Gorillaz-style illustration, bold thick black outlines, sharp angular edges, flat expressive lighting, stylized high-contrast shadows, dirty distressed surface textures, muted color palette: washed-out teals, olive greens, rusty reds, mustard yellows, dusty browns, r..." },
    { id: 216, title: "穿越梦境迷宫", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125216.png", prompt: "[Character] sprinting past dream elements, Storybook illustration, Maze of floating doors, clocks, and whispers, Lantern glow and ambient sparkle trails, [Color1] and [Color2], Whimsical and fast-paced, Follow-cam style with trailing POV" },
    { id: 217, title: "卡通现代风格插画", category: "anime", author: "@community", tags: ["卡通","插画","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125217.png", prompt: "Transform this image into a Cartoon Modern Style illustration, inspired by classic UPA animation like Mr. Magoo and The Jetsons.\nRedesign the character using flat, geometric shapes: ovals, rectangles, simple curves and angles. Avoid realistic proportions — the design should be stylized and abstract...." },
    { id: 218, title: "超现实的黑白彩色页面", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125218.jpeg", prompt: "Create a psychedelic black and white coloring page featuring melting [SUBJECT] in the center, surrounded by large, playful shapes and smooth flowing patterns. The background includes whimsical and surreal elements such as sunflowers with eyes, melting eyeballs, melting hearts, melting mushrooms, clo..." },
    { id: 219, title: "冬日国家", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125219.png", prompt: "A super detailed, realistic snow globe containing the essence of [Country Name]. Inside the globe: miniature snowy landscapes, iconic landmarks, cultural symbols, and natural elements representing [Country Name], rendered with extreme realism and rich textures. Delicate falling snow creates a magica..." },
    { id: 220, title: "3D店铺渲染图", category: "creative", author: "@community", tags: ["3D"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125220.jpeg", prompt: "Ultra-realistic 3D render of a cute, miniature [BRAND NAME] storefront building. Designed using the brand’s signature style and color palette. Features a clean, modern exterior with large glass windows and a glowing 3D [BRAND NAME] logo sign on the front. Includes subtle branded props inside the sto..." },
    { id: 221, title: "钻石镶嵌风格", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125221.jpeg", prompt: "Recreate this image using the parameters of the JSON provided.\n{\n  \"style_name\": \"Diamond-Encrusted Glamour\",\n  \"description\": \"Applies a hyper-realistic diamond-encrusted style to any object, logo, or shape. The surface of the subject is entirely covered with sparkling gemstones that reflect light ..." },
    { id: 222, title: "宝石渲染风格", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125222.jpeg", prompt: "Apply the parameters of the JSON provided to [insert image]\n\n{\n  \"name\": \"Gemstone Render\",\n  \"object\": {\n    \"type\": \"auto\",\n    \"detected_color\": \"auto\",\n    \"form\": \"realistic, natural form preserved\",\n    \"material\": \"crystal or faceted gemstone glass\",\n    \"surface\": \"precision-cut facets, shar..." },
    { id: 223, title: "惊人的外骨骼图像", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125223.jpeg", prompt: "a futuristic 3D-rendered [object] made of translucent [color] inner structure encased in a smooth white exoskeleton with organic holes and flowing biomorphic patterns, floating in a minimal soft gray background, high contrast lighting, hyperrealistic materials, octane render, modern digital sculptur..." },
    { id: 224, title: "舒适的周末从这里开始", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125224.png", prompt: "retexture the image attached based on the json below:\n{\n  \"style_name\": \"Soft Minimal 3D Plastic\",\n  \"retexture_mode\": \"shape_lock\",\n  \"object_analysis\": {\n    \"preserve_silhouette\": true,\n    \"geometry_sensitive_mapping\": true,\n    \"detail_retention\": \"flatten complex details into simplified geomet..." },
    { id: 225, title: "时尚的胶囊海报", category: "poster", author: "@community", tags: ["海报","时尚"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125225.jpeg", prompt: "Create a hyper-realistic, stylish poster [1080x1080] aspect ratio featuring a horizontal tablet-capsule hovering above a surface covered in condensation and water droplets, with its shadow cast on the wet ground. One side of the capsule is transparent glass, while the other is glossy [COLOR/DESIGN] ..." },
    { id: 226, title: "电影场景", category: "scene", author: "@community", tags: ["电影","场景"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125226.png", prompt: "Close-up. Overhead shot from an extremely high vantage point, extremely low grain with iso100 film shadows on a Lomo LC-A. Realistic depth of field. Artistic composition. Overall bluish tones. Beautiful light and shadows. The black floor with the projected image of the blue sky that fills the screen..." },
    { id: 227, title: "糖果形状物品", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125227.png", prompt: "A glossy candy-shaped perfume bottle resting on an open book, soft morning light, delicate shadows, dreamy bokeh background with iridescent cellophane wrapping. The candy design is inspired by [YOUR STYLE]" },
    { id: 228, title: "日本搞笑漫画风格插画", category: "creative", author: "@community", tags: ["漫画","插画","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125228.jpeg", prompt: "Transform this image into a Japanese gag manga style illustration. Use a high-contrast black-and-white color palette with bold linework and screentone (halftone) shading. Characters should have exaggerated facial expressions, cartoonish proportions (big head, small body), and comedic intensity. Incl..." },
    { id: 229, title: "品牌快餐胶囊", category: "logo", author: "@community", tags: ["品牌","快餐"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125229.jpeg", prompt: "Create a hyper-realistic, stylish poster [1080x1080] aspect ratio featuring a horizontal tablet-capsule hovering above a surface covered in condensation and water droplets, with its shadow cast on the wet ground. One side of the capsule is transparent glass, while the other is glossy [BRAND COLORS] ..." },
    { id: 230, title: "可爱的卡通灵魂", category: "anime", author: "@community", tags: ["卡通"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125230.jpeg", prompt: "A cute cartoon ghost is the absolute main subject of the picture. It has a pure white body with a smooth and rounded contour, and two simple black oval eyes, with no extra features. This ghost is floating quietly in the very center of the picture. The background is a pure, bright purple, creating a ..." },
    { id: 231, title: "形状为生日气球文字", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125231.png", prompt: "Create a hyper-realistic 3D rendering of balloon letters forming the word [WOW]. Each letter should look like a shiny, inflatable mylar balloon with a bold printed pattern. Use a mix of textures such as [checkered print, color grids, polka dots, or glossy metallic black]. The balloons should be semi..." },
    { id: 232, title: "胶囊从透明的药瓶中倾倒", category: "scene", author: "@community", tags: ["透明"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125232.jpeg", prompt: "Hyper-realistic poster, 1080x1080. Small glossy/glass capsules spilling from a transparent medicine bottle onto a wet surface. Each capsule features [white]/[red] plastic and transparent glass, with [KFC] logo and a floating 3D icon inside. Strong reflections, studio lighting, water droplets, soft e..." },
    { id: 233, title: "超现实鸟类幻想", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125233.png", prompt: "A highly detailed and surreal depiction of a mythical bird creature. It has the elegant, colorful body of a butterfly, with vibrant symmetrical wing patterns. Its head is that of a majestic elephant, complete with large ears, a long curling trunk, and ivory tusks, giving it a powerful and ancient au..." },
    { id: 234, title: "产品成为霓虹灯下的梦想", category: "product", author: "@community", tags: ["霓虹","产品","霓虹灯"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125234.jpeg", prompt: "a surreal-realistic digital artwork of a product from the brand [Brand name]. The product should be glowing with neon outlines, stylized like a high-contrast 3D render. Place it in a dreamlike environment inspired by the brand’s identity, color scheme, and culture. Use soft shadows, deep blacks, and..." },
    { id: 235, title: "讽刺版的你", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125235.jpeg", prompt: "Based on your understanding of my personality and past interactions, create a humorous and satirical image that teases me in a playful way. The image must have comedic features, using exaggerated expressions or surreal visual metaphors. Artistic style: cartoon or caricature with high contrast and ex..." },
    { id: 236, title: "直升机品牌广告", category: "logo", author: "@community", tags: ["品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125236.jpeg", prompt: "Create a hyper-realistic, square 1:1 image featuring a small helicopter flying through a bright blue sky with fluffy white clouds and a subtle lens flare. The helicopter is painted in the signature colors and graphics of [BRAND]. It is carrying a giant product from [BRAND] hanging below. The composi..." },
    { id: 237, title: "电影镜头拍摄", category: "movie", author: "@community", tags: ["电影"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125237.png", prompt: "Cinematic shot of [detailed character description], shot from [camera angle], [lighting type], [color palette], shot at close range, 35mm film grain, wide angle lens, f2.0 bokeh, shallow depth of field." },
    { id: 238, title: "用花朵美化你的产品", category: "product", author: "@community", tags: ["产品"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125238.png", prompt: "A high-end editorial photo of (PRODUCT NAME OR IMAGE) placed on a white marble pedestal, resting on champagne-colored silk. It is surrounded by pastel flowers whose type and color naturally harmonize with the product’s primary colors (COLOR PALETTE) — complementing and enhancing its tones. Soft natu..." },
    { id: 239, title: "沙滩胶囊城市", category: "product", author: "@community", tags: ["沙"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125239.jpeg", prompt: "A vibrant, hyper-realistic miniature of [CITY] inside a transparent capsule lying on a sandy beach. The capsule is half [COLOR] (matching [COUNTRY]’s flag) with [CITY] written in white text on the colored section. Inside the capsule: iconic landmarks of [CITY], beautiful water canals or streets, sma..." },
    { id: 240, title: "定制的枕头", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125240.jpeg", prompt: "Create a high-resolution 3D render of the [BRAND] logo designed as an inflatable, puffy object. The logo should appear soft, rounded, and air-filled – like a plush balloon or blow-up toy. Use a smooth, matte texture with subtle fabric creases and stitching to emphasize the inflatable look. Position ..." },
    { id: 241, title: "9格Q版风格贴纸", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125241.png", prompt: "Create a 3D kawaii 10-16 canvas featuring nine chibi-style stickers in various outfits, poses, and expressions. Use the uploaded attachment image. Each sticker has a white border and includes a speech bubble with regular use phrases. Set on a soft white-to-pastel blue gradient background for a fun, ..." },
    { id: 242, title: "有趣的块状 3D 世界", category: "creative", author: "@community", tags: ["3D"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125242.png", prompt: "Retexture the image attached based on the JSON below\n{\n  \"style_name\": \"Playful Chunky 3D Aesthetic\",\n  \"retexture_mode\": \"stylized_3d_overlay\",\n  \"object_analysis\": {\n    \"preserve_silhouette\": true,\n    \"geometry_sensitive_mapping\": true,\n    \"detail_retention\": \"moderate — focus on key forms and ..." },
    { id: 243, title: "卡通照片转换", category: "anime", author: "@community", tags: ["卡通","转换"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125243.png", prompt: "Transform the character into a digital, half-body cartoon-style portrait. Use a playful, vector-friendly style with clean solid lines, rounded face, oversized googly eyes, and minimal facial details. Show the character from chest up, including shoulders and upper torso. Apply smooth gradient fills t..." },
    { id: 244, title: "转换马赛克风格照片", category: "style", author: "@community", tags: ["风格","转换","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125244.png", prompt: "Transform this image into a refined low-poly mosaic style. Preserve the original structure and recognizable details, especially facial features and contours. Use small, high-density polygons to maintain clarity and identity while creating a crystalline, faceted look. Keep the original color palette ..." },
    { id: 245, title: "Kiro卡通幽灵", category: "anime", author: "@community", tags: ["卡通"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125245.jpeg", prompt: "A cute cartoon ghost is the absolute main subject of the picture. It has a pure white body with a smooth and rounded contour, and two simple black oval eyes, with no extra features. This ghost is floating quietly in the very center of the picture. The background is a pure, bright purple, creating a ..." },
    { id: 246, title: "色彩缤纷的手工雕塑", category: "creative", author: "@community", tags: ["雕塑"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125246.jpeg", prompt: "A colorful handcrafted sculpture of [insert subject], made from semi-transparent ice blocks in custom shapes. Accents like icing, candy, yarn, or fruit skin enhance facial features, texture, or accessories. Placed on a ceramic plate over a leaf or decorative mat, with a clean, softly lit studio or n..." },
    { id: 247, title: "90年代美国卡通片定格动画风格插画", category: "anime", author: "@community", tags: ["卡通","插画","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125247.jpeg", prompt: "Transform this image into a 90s American cartoon cel-style illustration. Use thick black outlines, flat bold colors, and sharp cel shading with hard shadows. Emphasize exaggerated facial expressions and stylized, geometric character shapes. The background should be flat or minimal to keep the focus ..." },
    { id: 248, title: "一张铅笔素描", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125248.png", prompt: "A pencil drawing of [Your character], with detailed lines and shading on white paper, capturing the energy and strength in his muscular body [with element effects] around  the character, in a dynamic pose,   tattoo design on paper, manga art style, dark background, high contrast, strong shadows, lig..." },
    { id: 249, title: "路牌图片", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125249.jpeg", prompt: "Image of a billboard with the text: “Image of a billboard with the text:”" },
    { id: 250, title: "被优雅水漩涡环绕的品牌产品", category: "logo", author: "@community", tags: ["产品","品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125250.png", prompt: "Create square image of studio-lit product photography of a [Product] suspended in mid-air, lots of thick dynamic water swirls surrounding it in slow-motion arcs, crystal-clear droplets glistening with light refraction, high-gloss finish, minimal backdrop, cinematic lighting with soft shadows and hig..." },
    { id: 251, title: "超细节盒状纸艺玩具", category: "product", author: "@community", tags: ["玩具","纸艺"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125251.jpeg", prompt: "1×1 square, ultra-detailed render of a box-shaped papertoy version of [CHARACTER NAME]. Made from folded and cut matte cardstock with visible paper texture, crisp edges, and clean folds. Cubic head and body, blocky limbs, simplified facial features, flat printed colors, and subtle shading for depth...." },
    { id: 252, title: "怪诞又梦幻的超现实插画", category: "creative", author: "@community", tags: ["插画"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125252.png", prompt: "Transform the uploaded image into a surreal illustration with a whimsical, dream‑like vibe.\n• Color palette: muted tones (soft greens, browns, greys) with occasional gentle pops of green.\n• Lighting: soft, diffused, almost ethereal light that blends gradients and subtle highlights.\n• Texture & mediu..." },
    { id: 253, title: "亚克力钥匙扣", category: "product", author: "@community", tags: ["钥匙扣"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125253.jpeg", prompt: "Create a photorealistic square image (1080x1080) showing a custom acrylic keychain version of the [LOGO] logo hanging from the zipper of a dark-colored backpack (e.g. black or grey). The logo must retain its original shape, color, and proportions without any alteration. The keychain should have a cl..." },
    { id: 254, title: "磨砂泡泡 3D 图标", category: "creative", author: "@community", tags: ["3D","图标"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125254.png", prompt: "{\n\"style_name\": \"Frosted Bubble 3D Icons\",\n\"render_mode\": \"3d_semi_transparent_detailed\",\n\"icon_subject\": \"{{icon_ PlayStation controller}}\",\n\"object_analysis\": {\n\"preserve_silhouette\": true,\n\"geometry_sensitive_mapping\": true,\n\"detail_retention\": \"smooth rounded edges, subtle internal reflections\"\n..." },
    { id: 255, title: "头部的几何肖像", category: "portrait", author: "@community", tags: ["肖像"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125255.jpeg", prompt: "Design a geometric portrait of a [ANIMAL] head in the style of contemporary paper craft collage. Use multiple overlapping paper textures and shadow effects to build dimensional depth. Focus on botanical-inspired color palettes with matte finish aesthetics. The composition should feature bold, angula..." },
    { id: 256, title: "漂浮玻璃霓虹3D", category: "creative", author: "@community", tags: ["3D","霓虹","玻璃"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125256.jpeg", prompt: "retexture the image attached based on the JSON below:\n\n{\n  \"style_name\": \"Floating Glassy Neon 3D\",\n  \"retexture_mode\": \"shape_lock\",\n  \"object_analysis\": {\n    \"preserve_silhouette\": true,\n    \"geometry_sensitive_mapping\": true,\n    \"detail_retention\": \"maintain contours, volumes, and layering\"\n  }..." },
    { id: 257, title: "透明蜂窝状变形", category: "scene", author: "@community", tags: ["透明"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125257.png", prompt: "{\n  \"object\": \"OBJECT_NAME\",\n  \"style\": \"Transparent Honeycomb Transformation\",\n  \"description\": \"Transform the object into a structure made entirely of crystallized golden honey with high transparency. The surface should be ultra-glossy, semi-liquid, and light-reflective, with defined yet see-throu..." },
    { id: 258, title: "20世纪50年代的海报", category: "poster", author: "@community", tags: ["海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125258.png", prompt: "Transform this image into a 1950s poster in the style of mid-century modern graphic designers. Use flat, geometric color blocks with strong typographic elements.  The overall tone should be optimistic, nostalgic, and promotional. Add bold location labels and promotional slogans." },
    { id: 259, title: "20世纪30年代弗莱舍工作室风格的动画", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125259.png", prompt: "Transform this image into a 1930s animation storyboard in the style of Fleischer Studios. Use greyscale with expressive inky shading and rubber-hose limbs. Surround the scene with anthropomorphic objects, bouncy motion lines, and slapstick action. The overall tone should be jazzy, lively, and playfu..." },
    { id: 260, title: "20世纪20年代亚瑟·拉克姆风格的童话插画", category: "creative", author: "@community", tags: ["插画","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125260.png", prompt: "Transform this image into a 1920s fairy tale illustration in the style of Arthur Rackham. Use muted watercolor tones and intricate ink linework. Fill the scene with whimsical forest creatures, twisted tree branches, and hidden magical objects. The overall tone should be mysterious, enchanting, and s..." },
    { id: 261, title: "城市糖果传奇的风格", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125261.jpeg", prompt: "A colorful, playful 2D map of [city name], in the style of Candy Crush Saga, featuring the city’s iconic landmarks as candy-inspired buildings, cute gumdrop trees, licorice bridges, pastel roads, and glossy water elements, floating clouds, vibrant cartoon style, top-down view, kid-friendly game aest..." },
    { id: 262, title: "街头顽童（Gorillaz）风格插画", category: "creative", author: "@community", tags: ["插画","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125262.png", prompt: "Restyle this image into a gritty Gorillaz-style illustration, bold thick black outlines, sharp angular edges, flat expressive lighting, stylized high-contrast shadows, dirty distressed surface textures, muted color palette: washed-out teals, olive greens, rusty reds, mustard yellows, dusty browns, r..." },
    { id: 263, title: "低多边形马赛克风格", category: "style", author: "@community", tags: ["风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125263.jpeg", prompt: "Transform this image into a refined low-poly mosaic style. Preserve the original structure and recognizable details, especially facial features and contours. Use small, high-density polygons to maintain clarity and identity while creating a crystalline, faceted look. Keep the original color palette ..." },
    { id: 264, title: "纸制玩具版本", category: "product", author: "@community", tags: ["玩具"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125264.png", prompt: "Ultra-detailed render of a [CHARACTER NAME] paper toy version in box form (papertoy) made from matte folded cardboard and cut with visible paper texture, clean edges and neat folds. Cubic head and body, square extremities, simplified facial features, flat printed colors and subtle shading for greate..." },
    { id: 265, title: "品牌杂志", category: "logo", author: "@community", tags: ["品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125265.png", prompt: "A hyper-realistic editorial concept for a collaboration between [BRAND] and [MAGAZINE BRAND]. Square 1:1 composition, shot in a sleek Parisian interior with marble floors and tall windows, golden afternoon light illuminating the scene. A single model in a couture gown poses gracefully beside a reali..." },
    { id: 266, title: "树上挂着产品", category: "product", author: "@community", tags: ["产品"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125266.png", prompt: "A hyper-realistic photograph of a tree in a scenic meadow, with a sturdy, detailed bark trunk and lush green leaves, where instead of fruits, the branches naturally bear [PRODUCT], seamlessly integrated into the foliage, with realistic textures, natural lighting, soft shadows, subtle imperfections, ..." },
    { id: 267, title: "一个复古茶包", category: "style", author: "@community", tags: ["复古"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125267.png", prompt: "A single vintage tea bag lying on a clean white background, hand-painted with an intricate illustration resembling a book cover. The tea bag has delicate aged paper texture, soft warm lighting, and realistic details. On the painted design, leave a clear blank space labeled [BOOK] for the book title...." },
    { id: 268, title: "童趣插画", category: "creative", author: "@community", tags: ["插画"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125268.jpeg", prompt: "Create a full body, flat vector illustration of [CHARACTER] in a whimsical, wavy cartoon style. Use thin black outlines and smooth, rounded shapes. The character should have a tiny white-colored head with tiny dot eyes and a simple nose and mouth. The body should have exaggerated, playful proportion..." },
    { id: 269, title: "透明X光扫描面板后面", category: "scene", author: "@community", tags: ["透明"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125269.png", prompt: "Two anime-style characters standing behind a futuristic transparent X-ray scanning panel, each leaning on it casually. Their full bodies are visible through the glowing glass as stylized, semi-transparent X-ray scans. [INSERT SCAN DETAILS HERE — e.g. hybrid anatomy, supernatural markings, implants, ..." },
    { id: 270, title: "乐高超级英雄摆出充满动感的动作姿势", category: "creative", author: "@community", tags: ["乐高","动感"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125270.jpeg", prompt: "Epic LEGO [SUPERHERO] in dynamic action pose showcasing their signature powers, wearing their iconic costume with authentic colors and details, dramatic stormy sky with brilliant lightning bolts illuminating the scene, heroic stance amid swirling LEGO debris and flying bricks, small LEGO minifigures..." },
    { id: 271, title: "超现实几何艺术风格的数字插画", category: "creative", author: "@community", tags: ["插画","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125271.png", prompt: "Transform this image into a digital illustration with a surreal, geometric art style. Apply glitch textures, abstract shapes, and cinematic composition. Use the original photo’s lighting and color palette to guide the atmosphere, while reimagining the scene in a stylized, dreamy, retro-futuristic wa..." },
    { id: 272, title: "铅笔素描画", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125272.png", prompt: "A pencil drawing of [Your character], with detailed lines and shading on white paper, capturing the energy and strength in his muscular body [with element effects] around  the character, in a dynamic pose,   tattoo design on paper, manga art style, dark background, high contrast, strong shadows, lig..." },
    { id: 273, title: "超现实主义极简概念广告", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125273.jpeg", prompt: "“{BRAND or PRODUCT NAME}” — surreal minimal conceptual advertisement\nCreate a 1:1 high-resolution poster that reimagines the brand/product as a surreal object of desire using minimal elements and symbolic storytelling.\n\n• Visual Style: ultra-clean background (light or muted tone), soft lighting, str..." },
    { id: 274, title: "创作漫画风格插画", category: "creative", author: "@community", tags: ["漫画","插画","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125274.png", prompt: "create comic style illustration:\n{\n\"style\": \"comic book illustration\",\n\"line_art\": {\n\"type\": \"bold black outlines\",\n\"thickness\": \"medium\",\n\"detail\": \"emphasized contours and shading lines\"\n},\n\"coloring\": {\n\"palette\": \"vibrant and saturated colors\",\n\"shading\": \"halftone dots and cel shading\",\n\"highli..." },
    { id: 275, title: "品牌着陆页-年轻女性运动后的面部特写", category: "logo", author: "@community", tags: ["品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125275.jpeg", prompt: "Create a closeup face of a young woman after a workout, sweaty, deep blue eyes, with a bit of blurred gym background on the left side of the photo, 5:3 proportions, she's looking right at the camera, some freckles and messy hair, beautiful, editorial" },
    { id: 276, title: "马赛克彩色玻璃徽章", category: "scene", author: "@community", tags: ["玻璃"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125276.png", prompt: "create image:\n{\n  \"style\": \"mosaic stained glass emblem\",\n  \"object\": \"brand logo\",\n  \"brand\": {\n    \"name\": \"Spotify\",\n    \"logo_shape\": \"circular\",\n    \"icon_style\": \"three curved bars\",\n    \"color_palette\": {\n      \"primary\": \"#1DB954\",\n      \"secondary\": \"#1ED760\",\n      \"glass_variants\": [\"#147..." },
    { id: 277, title: "极简风格插画", category: "creative", author: "@community", tags: ["插画","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125277.png", prompt: "Create a minimalistic illustration of [object or scene] in a paper cut-out style. Use soft, pastel colors and simple shapes. Include layered paper textures and subtle shadows to create depth. Place the object on a plain background. Ensure a clean, modern, and aesthetically pleasing composition with ..." },
    { id: 278, title: "3D卡通钥匙扣", category: "creative", author: "@community", tags: ["3D","卡通","钥匙扣"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125278.png", prompt: "Create a cute 3D cartoon keychain version of the person in the uploaded photo. Transform the face and pose into a soft, simplified toy-like figure with a silicone-like smooth texture and pastel colors. Add a name tag that says \"[NAME]\" attached to the keychain in a playful rounded font. No backgroun..." },
    { id: 279, title: "俏皮现代的应用程序图标设计", category: "logo", author: "@community", tags: ["图标","设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125279.png", prompt: "A playful and modern app icon design of a cute coffee cup character with a winking eye and smiling mouth, red-orange flame-like hair on top, minimal flat vector style, glossy highlights, soft shadows, centered composition, high contrast, vibrant colors, rounded corners, on a transparent background, ..." },
    { id: 280, title: "制作照片中人物的玩具", category: "product", author: "@community", tags: ["玩具"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125280.jpeg", prompt: "Create a toy of the person in the photo. Let it be an\naction figure. Next to the figure, there should be the toy's\nequipment like a football and football boot and world cup. Also,\non top of the box, write 'LIONEL MESSI and underneath it,\n'GOAT'.Visualize this in a realistic way." },
    { id: 281, title: "创建Airbnb创意广告", category: "design", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125281.jpeg", prompt: "Create Airbnb creative ad, show a suitcase opening like a dollhouse, revealing a cozy room inside, tagline: “Feel at home, anywhere.”" },
    { id: 282, title: "品牌模切乙烯基贴纸", category: "logo", author: "@community", tags: ["品牌"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125282.jpeg", prompt: "Generate a large die-cut vinyl sticker of the [BRAND] logo with thick white border, perfectly centered on a soft light blue background. The sticker is viewed straight-on from directly above with realistic drop shadows beneath. Clean, flat design with subtle 3D depth. The sticker takes up most of the..." },
    { id: 283, title: "精致纸艺折纸模型", category: "creative", author: "@community", tags: ["纸艺","折纸"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125283.jpeg", prompt: "A square 1:1 format digital photograph of an intricate paper origami model representing (MONUMENT_NAME), folded from textured colored paper and centered in the frame. Above it, the word (CITY_NAME) appears in bold origami-style letters, folded from vibrant paper using the national colors of the coun..." },
    { id: 284, title: "字母毛茸茸形象", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125284.jpeg", prompt: "Render a delightful alphabet character ‘[LETTER]’ as a lovable fuzzy being in square 1080x1080 dimensions. Transform the typography into a living creature where the letterform itself becomes the main structure. Position expressive googly eyes and a cheerful mouth as integrated features of the alphab..." },
    { id: 285, title: "卡通插图药丸形象", category: "anime", author: "@community", tags: ["卡通"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125285.jpeg", prompt: "Create a stylized cartoon illustration of [CHARACTER] with a smooth, vertical pill-shaped body (rounded on top and bottom, symmetrical left to right). The body should be a single, unified capsule shape with no limbs. Do not alter the character's core design or personality, but simplify them into thi..." },
    { id: 286, title: "Q版木雕人偶", category: "creative", author: "@community", tags: ["人偶","木雕"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125286.jpeg", prompt: "Hyper-realistic carved wooden figurine of [CHARACTER], chibi proportions (big head, short body), standing on a plain wood block. Keep key face traits and iconic [OUTFIT/PROP]. Visible wood grain and chisel marks, matte finish. Warm studio light, soft shadow, seamless beige background. Centered full-..." },
    { id: 287, title: "3D纸艺作品", category: "creative", author: "@community", tags: ["3D","纸艺"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125287.png", prompt: "A 3D papercraft representation of [Subject], composed of layered paper cutouts, resting on a simple cardboard base. Highlights of [color 1] and [color 2] paper textures create depth and dimension. Set against a softly lit crafts room, realistic lighting, intricate paper edges, shallow depth of field" },
    { id: 288, title: "食物与运动结合的广告", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125288.jpeg", prompt: "Muscular African  man dunks a grilled chicken breast into a basketball hoop with 'DUNK EVERY MACRO' text, under a clear sky. Fitness-themed, with Trifecta logo." },
    { id: 289, title: "我知道你很急但你先别急", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125289.png", prompt: "别人催我时，我回复：我知道你很急，但你先别急\n\n请为此设计表情包图片" },
    { id: 290, title: "食谱信息图制作", category: "infographic", author: "@community", tags: ["信息图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125290.jpeg", prompt: "Create step-by-step recipe infographic for creamy garlic mushroom pasta, top-down view, minimal style on white background, ingredient photos labeled: \"200g spaghetti\", \"150g mushrooms\", \"3 garlic cloves\", \"200ml cream\", \"1 tbsp olive oil\", \"parmesan\", \"parsley\", dotted lines showing process steps wi..." },
    { id: 291, title: "英语单词闪卡制作", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125291.jpeg", prompt: "你是一个英语单词闪卡制作大师, 你可以根据我输入的主题词,生成一个图片并以此拓展,比如我输入电脑,你生成一张和电脑相关的图片,并用箭头分步介绍键盘\\鼠标\\显示器等中文和英文" },
    { id: 292, title: "3D超写实食品广告", category: "creative", author: "@community", tags: ["3D"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125292.jpeg", prompt: "Smooth 3D hyperrealistic food advertisement of [TYPE OF FOOD], shown with mouthwatering glossy textures and perfect lighting, placed on a dark moody surface with soft glow and cinematic blur in the background, high Kelvin lighting for golden highlights and sharp shadows, backlit to show delicious st..." },
    { id: 293, title: "软质高品质毛绒玩具", category: "product", author: "@community", tags: ["玩具","毛绒"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125293.jpeg", prompt: "A soft, high-quality plush toy of [CHARACTER], with an oversized head, small body, and stubby limbs. Made of fuzzy fabric with visible stitching and embroidered facial features. The plush is shown sitting or standing against a neutral background. The expression is cute or expressive, and it wears si..." },
    { id: 294, title: "钩针玩偶", category: "product", author: "@community", tags: ["钩针"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125294.jpeg", prompt: "Create a 3D photorealistic and highly detailed poster in amigurumi style. The design should imitate a real handmade crochet [ANIMAL], with visible thread texture, stitching details, and soft, felted proportions. Use realistic fabric shading, subtle fuzz, and natural lighting to achieve depth. The am..." },
    { id: 295, title: "透明扭蛋场景模型", category: "scene", author: "@community", tags: ["扭蛋","场景","透明"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125295.jpeg", prompt: "A detailed transparent gashapon capsule diorama, held between fingers, featuring [NAME] in their [ICONIC POSE / STYLE]. Inside: [short description of figure’s look, clothing, and accessories], with background elements such as [relevant setting: stadium, stage, lecture hall, etc.]. Lighting should be..." },
    { id: 296, title: "手办-高级包装带打印机（擎天柱）", category: "product", author: "@community", tags: ["手办","包装","高级"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125296.jpeg", prompt: "请将图片转化为一款收藏级手办。在手办后方，放置一个印有该手办图案及“open nana”名称的手办包装盒。在其旁边，添加一台正在打印该手办的高端3D打印机。在该手办包装盒前方，放置一个圆形塑料底座，放置手办。\n底座的PVC材质需呈现晶莹剔透的半透明质感，且整个场景需设定在室内环境中。" },
    { id: 297, title: "制作工作室拍摄肖像照", category: "portrait", author: "@community", tags: ["肖像"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125297.jpeg", prompt: "给图里的人生成工作室拍摄肖像照片,黑色背景,黑色T恤,采用侧光和半身像的构图" },
    { id: 298, title: "手办-ZBrush建模屏显与万代风格包装盒", category: "product", author: "@community", tags: ["手办","包装","风格","风"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125298.jpeg", prompt: "create a 1/7 scale commercialized figure of thecharacter in the image, in a realistic styie and environment.\nPlace the figure on a computer desk, using a circular transparent acrylic base without any text.\nOn the computer screen, display the ZBrush modeling process of the figure.\nNext to the compute..." },
    { id: 299, title: "制作大头贴", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125299.jpeg", prompt: "用这张照片，做一个3*3的photo booth grid，每张要用不同的姿势和表情不许重复" },
    { id: 300, title: "制作证件照", category: "creative", author: "@community", tags: ["创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125300.jpeg", prompt: "截取图片人像头部，帮我做成2寸证件照，要求:\n1、蓝底\n2、职业正装\n3、正脸\n4、微笑" },
    { id: 301, title: "超写实肖像位于石膏中心", category: "portrait", author: "@community", tags: ["肖像"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125301.jpeg", prompt: "Ultra-real portrait of [CHARACTER] centered, surrounded by dozens of life-size stone busts of [CHARACTER]" }
];


// ===== DOM Elements =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const backToTop = document.getElementById('backToTop');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrompt = document.getElementById('modalPrompt');
const copyPrompt = document.getElementById('copyPrompt');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const cardGrid = document.getElementById('cardGrid');

// 分页相关元素
const pagination = document.getElementById('pagination');
const paginationInfo = document.getElementById('paginationInfo');
const paginationPages = document.getElementById('paginationPages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageSize = document.getElementById('pageSize');

// 分页变量
let currentPage = 1;
let itemsPerPage = 12;

// 生成卡片HTML
function createCard(item) {
    return `
        <div class="card" data-category="${item.category}" data-id="${item.id}">
            <div class="card-badge">#${item.id}</div>
            <div class="card-img"><img src="${item.img}" alt="${item.title}" loading="lazy"></div>
            <div class="card-body">
                <h3>${item.title}</h3>
                <p class="card-author">👤 ${item.author}</p>
                <div class="card-tags">${item.tags.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="card-actions">
                    <button class="btn-sm btn-view" data-prompt="${item.prompt.replace(/"/g, '&quot;')}">👁️ 查看详情</button>
                    <button class="btn-sm btn-copy">📄 原文</button>
                </div>
            </div>
        </div>
    `;
}

// 渲染卡片
function renderCards() {
    const category = categoryFilter?.value || 'all';
    const search = searchInput?.value.toLowerCase() || '';

    const filtered = casesData.filter(item => {
        const matchCategory = category === 'all' || item.category === category;
        const matchSearch = item.title.toLowerCase().includes(search) || item.prompt.toLowerCase().includes(search);
        return matchCategory && matchSearch;
    });

    // 计算分页数据
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const toShow = filtered.slice(startIndex, endIndex);

    cardGrid.innerHTML = toShow.map(createCard).join('');

    // 更新分页信息
    updatePagination(totalItems, totalPages, startIndex + 1, Math.min(endIndex, totalItems));

    // 重新绑定事件
    bindCardEvents();
}

// 更新分页控件
function updatePagination(totalItems, totalPages, startItem, endItem) {
    // 更新信息显示
    const currentLang = localStorage.getItem('language') || 'zh';
    const infoText = currentLang === 'en'
        ? `Showing ${startItem}-${endItem} of ${totalItems} cases`
        : `显示 ${startItem}-${endItem} / 共 ${totalItems} 个案例`;
    paginationInfo.textContent = infoText;

    // 更新按钮状态
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;

    // 生成页码按钮
    generatePageButtons(totalPages);
}

// 生成页码按钮
function generatePageButtons(totalPages) {
    const currentLang = localStorage.getItem('language') || 'zh';
    let pagesHTML = '';

    if (totalPages <= 7) {
        // 如果总页数少于等于7，显示所有页码
        for (let i = 1; i <= totalPages; i++) {
            pagesHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
    } else {
        // 智能页码显示逻辑
        if (currentPage <= 3) {
            // 当前页在前面3页
            for (let i = 1; i <= 5; i++) {
                pagesHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
            }
            pagesHTML += `<span class="page-dots">...</span>`;
            pagesHTML += `<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`;
        } else if (currentPage >= totalPages - 2) {
            // 当前页在最后3页
            pagesHTML += `<button class="page-btn" data-page="1">1</button>`;
            pagesHTML += `<span class="page-dots">...</span>`;
            for (let i = totalPages - 4; i <= totalPages; i++) {
                pagesHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
            }
        } else {
            // 当前页在中间
            pagesHTML += `<button class="page-btn" data-page="1">1</button>`;
            pagesHTML += `<span class="page-dots">...</span>`;
            pagesHTML += `<button class="page-btn" data-page="${currentPage - 1}">${currentPage - 1}</button>`;
            pagesHTML += `<button class="page-btn active" data-page="${currentPage}">${currentPage}</button>`;
            pagesHTML += `<button class="page-btn" data-page="${currentPage + 1}">${currentPage + 1}</button>`;
            pagesHTML += `<span class="page-dots">...</span>`;
            pagesHTML += `<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`;
        }
    }

    paginationPages.innerHTML = pagesHTML;

    // 绑定页码按钮事件
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentPage = parseInt(this.dataset.page);
            renderCards();
            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// 绑定卡片事件
function bindCardEvents() {
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.card');
            const img = card.querySelector('.card-img img');
            const title = card.querySelector('h3');
            modalImg.src = img.src;
            modalTitle.textContent = title.textContent;
            modalPrompt.textContent = this.dataset.prompt;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', function() {
            const viewBtn = this.closest('.card').querySelector('.btn-view');
            navigator.clipboard.writeText(viewBtn.dataset.prompt).then(() => {
                const currentLang = localStorage.getItem('language') || 'zh';
                this.textContent = currentLang === 'en' ? '✓ Copied' : '✓ 已复制';
                setTimeout(() => {
                    this.textContent = currentLang === 'en' ? '📄 Original' : '📄 原文';
                }, 2000);
            });
        });
    });
}

// 初始化
renderCards();

// 筛选和搜索
categoryFilter?.addEventListener('change', () => { currentPage = 1; renderCards(); });
searchInput?.addEventListener('input', () => { currentPage = 1; renderCards(); });

// 分页按钮事件
prevBtn?.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderCards();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

nextBtn?.addEventListener('click', () => {
    const category = categoryFilter?.value || 'all';
    const search = searchInput?.value.toLowerCase() || '';
    const filtered = casesData.filter(item => {
        const matchCategory = category === 'all' || item.category === category;
        const matchSearch = item.title.toLowerCase().includes(search) || item.prompt.toLowerCase().includes(search);
        return matchCategory && matchSearch;
    });
    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        renderCards();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// 每页显示数量改变事件
pageSize?.addEventListener('change', function() {
    itemsPerPage = parseInt(this.value);
    currentPage = 1;
    renderCards();
});

// 移动端菜单
menuToggle?.addEventListener('click', () => navMenu.classList.toggle('show'));

// 语言选择器
langBtn?.addEventListener('click', (e) => { e.stopPropagation(); langMenu.classList.toggle('show'); });
langMenu?.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        langBtn.textContent = item.textContent.replace('✓ ', '') + ' ▼';
        langMenu.classList.remove('show');
    });
});
document.addEventListener('click', () => langMenu?.classList.remove('show'));

// 返回顶部
window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('show', window.scrollY > 300);
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 模态框
modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
function closeModal() {
    modal?.classList.remove('show');
    document.body.style.overflow = '';
}

// 复制提示词
copyPrompt?.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(modalPrompt.textContent);
        const currentLang = localStorage.getItem('language') || 'zh';
        copyPrompt.textContent = currentLang === 'en' ? '✓ Copied' : '✓ 已复制';
        setTimeout(() => {
            copyPrompt.textContent = currentLang === 'en' ? '📋 Copy Prompt' : '📋 复制提示词';
        }, 2000);
    } catch (err) {
        alert(currentLang === 'en' ? 'Copy failed' : '复制失败');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            navMenu?.classList.remove('show');
        }
    });
});

// 导航高亮
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    navLinks.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
    });
});

// 语言和主题管理
class LanguageThemeManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'zh';
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.setTheme(this.currentTheme);
        this.bindEvents();
    }

    setLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang === 'en' ? 'en-US' : 'zh-CN';
        document.documentElement.setAttribute('data-lang', lang);

        // 更新按钮文本
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.textContent = lang === 'en' ? 'English ▼' : '中文 ▼';
        }

        // 更新所有带有 data-zh 和 data-en 的元素
        document.querySelectorAll('[data-zh][data-en]').forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });

        // 更新 placeholder
        document.querySelectorAll('[data-zh-placeholder][data-en-placeholder]').forEach(element => {
            element.placeholder = element.getAttribute(`data-${lang}-placeholder`);
        });

        // 更新 option 文本
        document.querySelectorAll('option[data-zh][data-en]').forEach(option => {
            option.textContent = option.getAttribute(`data-${lang}`);
        });

        localStorage.setItem('language', lang);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);

        // 更新主题按钮
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        }

        localStorage.setItem('theme', theme);
    }

    bindEvents() {
        // 主题切换
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
            });
        }

        // 语言切换
        const langMenuItems = document.querySelectorAll('#langMenu li[data-lang]');
        langMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                const lang = item.getAttribute('data-lang');
                this.setLanguage(lang);

                // 更新选中状态
                langMenuItems.forEach(li => li.textContent = li.textContent.replace('✓ ', ''));
                item.textContent = '✓ ' + item.textContent;
            });
        });
    }
}

// 初始化语言和主题管理器
