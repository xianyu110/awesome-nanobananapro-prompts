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

    { id: 137, title: "手绘板书风格 PPT 生成", category: "presentation", author: "@lovart", tags: ["PPT", "手绘", "教育", "板书"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194506808.jpeg", prompt: "帮我根据下面这个文章做一套中学���都能理解的PPT。\n\n先写1个PPT大纲，规划出每一页的PPT的内容。\n\n然后将每一页的PPT内容分别扔给Nana Banana pro生成对应页面的PPT，需要确保风格一致。\n\nPPT的具体风格应改为教授手写拼贴画和白板风格。\n\n文字和图像都由 Nano Banana Pro 生成，另外不要将PPT 变成一整张图，一页一张生成。\n\n文章内容为：「此处填写文章内容」" },

    { id: 138, title: "迪特拉姆斯极简风格 PPT", category: "presentation", author: "@lovart", tags: ["PPT", "极简", "设计", "迪特拉姆斯"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194506952.jpeg", prompt: "帮我根据下面这个文章做一套中学生都能理解的PPT。\n\nPPT的具体风格应该为迪特拉姆斯的设计风格（Dieter Rams）。\n\n主色调: 哑光白、浅灰、黑色。\n\n点缀色: 鲜艳的橙色和绿色。\n\n表面通常干净、平滑，没有任何多余的装饰性纹理。\n\n严谨的网格系统布局。圆角矩形，具有数学般的美感。" },

    { id: 139, title: "英雄联盟 UI 风格 PPT", category: "presentation", author: "@lovart", tags: ["PPT", "游戏", "UI", "英雄联盟"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194507223.jpeg", prompt: "帮我根据下面这个文章做一套中学生都能理解的PPT。\n\nPPT的具体风格应该为英雄联盟的游戏UI风格。\n\n文字和图像都由 Nano Banana Pro 生成，另外不要将PPT 变成一整张图，一页一张生成。" },

    { id: 140, title: "Bento便当盒风格 PPT", category: "presentation", author: "@lovart", tags: ["PPT", "便当盒", "模块化", "科技"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194507394.jpeg", prompt: "帮我根据下面这个论文介绍做一套中学生都能理解的PPT。\n\nPPT的具体风格应该为Bento grid layout,苹果总结幻灯片风格，模块化设计，圆角方块，UI 界面仪表盘，柔和阴影，有组织的构图，信息图表风格，深色模式，科技产品功能总结，等轴测视图。" },

    { id: 141, title: "赛博手绘风格 PPT", category: "presentation", author: "@lovart", tags: ["PPT", "赛博朋克", "手绘", "故事性"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125194508177.jpeg", prompt: "帮我根据下面这个文章做一套中学生都能理解的PPT。\n\nPPT的具体风格应该为图形记录风格，手写赛博朋克风，适当增加故事性的图像和图表。\n\n文字和图像都由 Nano Banana Pro 生成，另外不要将PPT 变成一整张图，一页一张生成。" },

    { id: 142, title: "未来感数字名片生成", category: "design", author: "@lovart", tags: ["名片", "数字", "未来感", "赛博"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204027335.png", prompt: "生成一张逼真的照片，展示一只手拿着一张透明的未来感玻璃卡片，卡片上显示的是我的社交媒体个人资料界面。卡片在粉红、紫色和蓝色的渐变霓虹灯光下发光。背景是深色且模糊的，以突出发光的边缘。玻璃卡片上显示着卡通风格的个人照片、认证徽章、用户名、昵称、年龄、项目信息、网站、加入日期和粉丝统计。手指上的灯光反射看起来电影感十足且充满情绪，给人一种高科技全息的感觉。超逼真，8K 细节，景深，赛博美学。" },

    { id: 143, title: "植物介绍卡片批量生成", category: "education", author: "@lovart", tags: ["植物", "介绍", "卡片", "批量"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204028614.png", prompt: "根据提供的10种不同绿植图片，一次性生成这10种植物的介绍卡片，包含植物名称、特征描述、养护要点等详细信息。" },

    { id: 144, title: "菜单实时翻译标注", category: "translation", author: "@lovart", tags: ["菜单", "翻译", "标注", "无违和感"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204028733.jpeg", prompt: "给这个菜单旁边标注中文，中文要跟其他文字字体一样，看上去没有违和感" },

    { id: 145, title: "流体动力学原理图解", category: "education", author: "@lovart", tags: ["物理", "流体动力学", "原理", "图解"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204035982.png", prompt: "制作一幅插图说明图，详细解释图中所展示的流体动力学原理以及接下来会发生什么。" },

    { id: 146, title: "鸡蛋浮力实验图解", category: "education", author: "@lovart", tags: ["物理", "浮力", "实验", "鸡蛋"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204041390.jpeg", prompt: "如果在水中加入大量盐，鸡蛋会发生什么变化" },

    { id: 147, title: "软件教程标注生成", category: "education", author: "@lovart", tags: ["教���", "标注", "截图", "操作指南"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204043005.png", prompt: "我想写个教程，请你帮我在图片中模拟截图之后使用微信编辑工具进行标注（红框+红色箭头+红色文字），标注出创建知识库、新建应用、新建插件的位置，并简单讲解" },

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

    { id: 158, title: "孟菲斯风格活动海报", category: "poster", author: "@lovart", tags: ["孟菲斯", "活动", "海报", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/640-20251125204106620.png", prompt: "用Lovart生成了一张孟菲斯风格的活动宣传海报" }
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
const langThemeManager = new LanguageThemeManager();

// 复制模板功能
document.addEventListener('DOMContentLoaded', function() {
    const copyTemplateBtn = document.getElementById('copyTemplate');

    if (copyTemplateBtn) {
        copyTemplateBtn.addEventListener('click', function() {
            const templateText = `**案例标题：** 简要描述案例内容

**分类：** [角色一致性/翻译上色/海报设计/游戏设计/UI设计/产品渲染/IP创作/古风创作/信息图表/风格转换/场景编辑/视觉设计]

**提示词：** 详细的提示词内容

**效果图片：** 效果图片链接或附件

**说明：** （可选）案例的特殊说明或技巧分享`;

            navigator.clipboard.writeText(templateText).then(function() {
                const originalText = copyTemplateBtn.textContent;
                copyTemplateBtn.textContent = copyTemplateBtn.getAttribute('data-zh') === '📋 复制模板' ? '✅ 已复制!' : '✅ Copied!';

                setTimeout(function() {
                    copyTemplateBtn.textContent = originalText;
                }, 2000);
            }).catch(function(err) {
                console.error('复制失败:', err);
                alert('复制失败，请手动复制模板内容');
            });
        });
    }
});

console.log(`🍌 Awesome Nano Banana Pro Images 已加载 ${casesData.length} 个案例!`);