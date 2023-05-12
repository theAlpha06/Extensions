import { getCurrentTab } from './utils.js'

document.addEventListener('DOMContentLoaded', async() => {
    console.log('a')
    const activeTab = await getCurrentTab();
    console.log(activeTab)
    if(activeTab.url.includes('youtube.com/watch')) {
        
    } else {
        const container = document.getElementsByClassName('container')[0];
        container.innerHTML = "<div class='title'>This is not a you tube page.</div>";
    }
});