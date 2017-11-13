function clickDropdownMenu() {
    var menus = document.querySelectorAll('.clickDropdown-menu');
    var clickLis = document.querySelectorAll('.clickDropdown');
    var flag = false;
    var icons = [];
    for (var i = 0; i < clickLis.length; i++) {
        clickLis[i].index = i;
        icons[i] = clickLis[i].getElementsByTagName('span')[0];
        clickLis[i].onclick = function () {
            this.parentNode.parentNode.style.overflow = 'auto';
            if (flag) {
                menus[this.index].style.display = 'block';
                icons[this.index].style.transform = 'rotate(-270deg)'
                flag = false;
            } else {
                menus[this.index].style.display = 'none';
                icons[this.index].style.transform = 'rotate(-90deg)';
                flag = true;
            }
        }
    }
    var clickBtn = document.querySelector('.navbar-inverse .navbar-toggle');
    console.log(clickBtn);
    clickBtn.onclick = function () {
        if (!flag) {
            for (var i = 0; i < 3; i++) {
                this.children[i].style.display = 'none';
            }
            this.lastElementChild.style.display = 'block';
            flag = 1;
        } else {
            for (var i = 0; i < 3; i++) {
                this.children[i].style.display = 'block';
            }
            this.lastElementChild.style.display = 'none';
            flag = 0;
        }

    }
}

clickDropdownMenu();

function closeBanner() {
    var banner = document.querySelector('.banner');
    var closeBtn = document.querySelector('.icon-close');
    closeBtn.onclick = function () {
        banner.style.display = 'none';
    }
}
closeBanner();