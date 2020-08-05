'use strict';

var placeholders = document.querySelectorAll('.styled-input__placeholder-text'),
    submit_btn = document.getElementById('Submit'),
    inputs = document.querySelectorAll('.styled-input__input');

placeholders.forEach(function (el, i) {
    var value = el.innerText,
        html = '';
    for (var _iterator = value, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var w = _ref;

        if (!value) value = '&nbsp;';
        html += '<span class="letter">' + w + '</span>';
    }
    el.innerHTML = html;
});

inputs.forEach(function (el) {
    var parent = el.parentNode;
    el.addEventListener('focus', function () {
        parent.classList.add('filled');
        placeholderAnimationIn(parent, true);
    }, false);
    el.addEventListener('blur', function () {
        if (el.value.length) return;
        parent.classList.remove('filled');
        placeholderAnimationIn(parent, false);
    }, false);
});

submit_btn.onclick = function(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    $.ajax({
                url: '/login',
                type: 'post',
                dataType:"text",
                async:false,
                data: {
                    user:username,
                    password:password
                },
                success:function(data){
                    if (data=="0") {
                        alert("用户不存在！")
                    }else if (data=="1") {
                        alert("你输入的密码错误！")
                    }else if (data=="2") {
                        self.location='homepage.html';
                    }else{
                        console.log(data);
                    }
                },
                error:function(){
                    alert("服务器端响应错误")
                }
            })
    
}

function placeholderAnimationIn(parent, action) {
    var act = action ? 'add' : 'remove';
    var letters = parent.querySelectorAll('.letter');
    letters = [].slice.call(letters, 0);
    if (!action) letters = letters.reverse();
    letters.forEach(function (el, i) {
        setTimeout(function () {
            var contains = parent.classList.contains('filled');
            if (action && !contains || !action && contains) return;
            el.classList[act]('active');
        }, 50 * i);
    });
}

setTimeout(function () {
    document.body.classList.add('on-start');
}, 100);

setTimeout(function () {
    document.body.classList.add('document-loaded');
}, 1800);