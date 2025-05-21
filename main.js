// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 技能标签动画效果
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s';
    });
    
    tag.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// 项目卡片动画效果
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    });
});

// 成就卡片动画效果
const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f0f0';
        this.style.transition = 'background-color 0.3s';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#f8f9fa';
    });
});

// 联系方式图标动画
const contactItems = document.querySelectorAll('.contact-item i');
contactItems.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.5s';
    });
    
    icon.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0)';
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s';
    }, 100);
}); 