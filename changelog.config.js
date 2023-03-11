module.exports = {
    disableEmoji: false, // 是否關閉 emoji
    format: '{emoji}{subject}', // Commit 訊息的格式
    list: ['木雕', '水晶', '玉器', '玉雕', '其他', '書法', '國畫', '國畫-山水', '國畫-花鳥', '國畫-人物', '瓷器', '陶器', '紫砂', '銅器', '篆刻', '禪繞粉彩'], // Commit 類型的清單
    maxMessageLength: 70, // Commit 訊息的最大長度
    minMessageLength: 1, // Commit 訊息的最小長度
    questions: ['type', 'subject', 'body'], // 問題的清單
    scopes: [], // Commit 範圍的清單
    types: { // Commit 類型的清單
        木雕: {
            description: '木雕', // Commit 類型的描述
            emoji: '🪵', // Commit 類型的 emoji
            value: '木雕' // Commit 類型的值
        },
        水晶: {
            description: '水晶',
            emoji: '🔮',
            value: '水晶'
        },
        玉器: {
            description: '玉器',
            emoji: '🪨',
            value: '玉器'
        },
        玉雕: {
            description: '玉雕',
            emoji: '🪨',
            value: '玉雕'
        },
        書法: {
            description: '書法',
            emoji: '🔲',
            value: '書法'
        },
        國畫: {
            description: '國畫',
            emoji: '🖌',
            value: '國畫'
        },
        "國畫-山水": {
            description: '國畫-山水',
            emoji: '⛰',
            value: '國畫-山水'
        },
        "國畫-花鳥": {
            description: '國畫-花鳥',
            emoji: '🌼',
            value: '國畫-花鳥'
        },
        "國畫-人物": {
            description: '國畫-人物',
            emoji: '👤',
            value: '國畫-人物'
        },
        瓷器: {
            description: '瓷器',
            emoji: '🍵',
            value: '瓷器'
        },
        陶器: {
            description: '陶器',
            emoji: '🏺',
            value: '陶器'
        },
        紫砂: {
            description: '紫砂',
            emoji: '🫖',
            value: '紫砂'
        },
        銅器: {
            description: '銅器',
            emoji: '🥉',
            value: '銅器'
        },
        篆刻: {
            description: '篆刻',
            emoji: '🖆',
            value: '篆刻'
        },
        禪繞粉彩: {
            description: '禪繞粉彩',
            emoji: '⚜',
            value: '禪繞粉彩'
        },
        其他: {
            description: '其他',
            emoji: '📛',
            value: '其他'
        },
    },
    messages: {  // Commit 的提示訊息描述
        type: '請選擇文章分類：',
        subject: '請填寫文章標題或更新了什麼：\n',
        body: '更詳細的說明（可選, 若沒有請按 Enter 略過）：\n ',
    }
};
