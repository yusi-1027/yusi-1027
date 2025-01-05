const { createApp } = Vue

createApp({
    data() {
        return {
            news: [
                "2024年度入學申請開始接受報名",
                "新增AR/VR實驗課程",
                "國際教育展將於下月舉行"
            ],
            currentNewsIndex: 0
        }
    },
    computed: {
        currentNews() {
            return this.news[this.currentNewsIndex]
        }
    },
    mounted() {
        setInterval(() => {
            this.currentNewsIndex = (this.currentNewsIndex + 1) % this.news.length
        }, 3000)
    }
}).mount("#app")
