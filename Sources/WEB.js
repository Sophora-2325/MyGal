  document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
            
    gridItems.forEach((item, index) => {
    const gridId = `url_grid_${index + 1}`; // 每个格子的唯一标识
    loadSavedUrl(item, gridId); // 加载已保存的网址
                
                // 保存按钮事件
        const saveBtn = item.querySelector('.save-btn');
        saveBtn.addEventListener('click', () => {
        const urlInput = item.querySelector('.url-input');
        const url = urlInput.value.trim();
                    
                    // 简单验证网址格式（包含http/https）
        if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
        saveUrl(gridId, url); // 保存text-网址键值对
        loadSavedUrl(item, gridId); // 刷新显示
            urlInput.value = ''; // 清空输入框
            } else {
                alert('请输入有效的网址（需以http://或https://开头）');
            }
        });
    });
});

    // 保存网址：键固定为text，值为输入的网址
    function saveUrl(gridId, url) {
    const key = 'text'; // 固定键
    // 存储格式：{ "text": "用户输入的网址" }
    const savedData = { [key]: url };
    localStorage.setItem(gridId, JSON.stringify(savedData));
}

    // 加载并显示已保存的网址（点击可跳转）
    function loadSavedUrl(gridItem, gridId) {
    const savedUrlContainer = gridItem.querySelector('.saved-url');
    const savedData = JSON.parse(localStorage.getItem(gridId) || '{}');
    const savedUrl = savedData.text; // 从text键中获取网址
            
    if (savedUrl) {
        // 显示可点击的网址链接
        savedUrlContainer.innerHTML = `<a href="${savedUrl}" target="_blank" class="url-link">${savedUrl}</a>`;
    } else {
        // 无数据时显示提示
        savedUrlContainer.innerHTML = '<div class="no-url">暂无保存的网址</div>';
    }
}
