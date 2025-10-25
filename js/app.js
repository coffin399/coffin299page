// Theme management
class ThemeManager {
    constructor() {
        this.themeToggle = null;
        this.themeIcon = null;
        this.currentTheme = this.getInitialTheme();
        
        // DOM要素の取得を遅延させる
        this.init();
    }

    getInitialTheme() {
        // ローカルストレージに保存されたテーマがある場合はそれを使用
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // デフォルトでダークモードを使用
        return 'dark';
    }

    init() {
        // DOM要素を再取得
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');
        
        // テーマを設定
        this.setTheme(this.currentTheme);
        
        // イベントリスナーを設定
        this.setupEventListeners();
        this.setupSystemThemeListener();
        this.setupStorageListener();
    }

    setupSystemThemeListener() {
        // システムのテーマ設定が変更された時のリスナー
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // ユーザーが手動でテーマを変更していない場合のみ、システム設定に従う
                if (!localStorage.getItem('theme')) {
                    // デフォルトはダークモードなので、システムがライトモードの場合のみライトモードに変更
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    setupEventListeners() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        if (this.themeIcon) {
            this.themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        
        // テーマ変更を他のタブに通知
        this.notifyThemeChange(theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    notifyThemeChange(theme) {
        // 他のタブにテーマ変更を通知
        if (typeof Storage !== 'undefined') {
            localStorage.setItem('theme-changed', Date.now().toString());
        }
    }

    setupStorageListener() {
        // 他のタブからのテーマ変更を監視
        window.addEventListener('storage', (e) => {
            if (e.key === 'theme-changed') {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme && savedTheme !== this.currentTheme) {
                    this.setTheme(savedTheme);
                }
            }
        });
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}

// Navigation management
class NavigationManager {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.setupEventListeners();
        this.setActiveLinkByCurrentPage();
    }

    setupEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.setActiveLink(e.currentTarget);
            });
        });
    }

    setActiveLink(clickedLink) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    }

    setActiveLinkByCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && (href.includes(currentPage) || (currentPage === '' && href.includes('index.html')))) {
                link.classList.add('active');
            }
        });
    }
}

// Animation manager
class AnimationManager {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
    }

    observeElements() {
        const elementsToAnimate = document.querySelectorAll('.profile-section, .main-title, .subtitle');
        elementsToAnimate.forEach(element => {
            this.observer.observe(element);
        });
    }
}

// Visitor counter manager
class VisitorCounterManager {
    constructor() {
        this.counter = document.querySelector('.visitor-counter');
        this.isVisible = false;
        this.init();
    }

    init() {
        if (this.counter) {
            this.setupScrollListener();
        }
    }

    setupScrollListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Show counter when scrolled down 20% of the page or after 100px
            const threshold = Math.max(documentHeight * 0.2, 100);
            
            if (scrollY > threshold && !this.isVisible) {
                this.showCounter();
            } else if (scrollY <= threshold && this.isVisible) {
                this.hideCounter();
            }
        });
        
        // 初期チェック - ページが既にスクロールされている場合
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const threshold = Math.max(documentHeight * 0.2, 100);
        
        if (scrollY > threshold) {
            this.showCounter();
        }
    }

    showCounter() {
        if (this.counter) {
            this.counter.classList.add('visible');
            this.isVisible = true;
            console.log('Visitor counter shown');
        }
    }

    hideCounter() {
        if (this.counter) {
            this.counter.classList.remove('visible');
            this.isVisible = false;
            console.log('Visitor counter hidden');
        }
    }
}


// Main application class
class PortfolioApp {
    constructor() {
        this.themeManager = new ThemeManager();
        this.navigationManager = new NavigationManager();
        this.animationManager = new AnimationManager();
        this.visitorCounterManager = new VisitorCounterManager();
        
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.animationManager.observeElements();
            });
        } else {
            this.animationManager.observeElements();
        }

        // Add smooth scrolling for anchor links
        this.setupSmoothScrolling();
        
        // Add keyboard navigation support
        this.setupKeyboardNavigation();
    }

    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                const targetElement = document.getElementById(targetId || '');
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Toggle theme with Ctrl/Cmd + T
            if ((e.ctrlKey || e.metaKey) && e.key === 't') {
                e.preventDefault();
                this.themeManager.toggleTheme();
            }
        });
    }
}

// Initialize the application
let app;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app = new PortfolioApp();
});

// Also initialize immediately if DOM is already loaded
if (document.readyState !== 'loading') {
    app = new PortfolioApp();
}