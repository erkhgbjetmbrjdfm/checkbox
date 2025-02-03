
    const canvas = document.getElementById('map');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = "image.png";
    ctx.drawImage(img, 0, 0);

    let checkboxlist = [];
    const q = 15;
    // Create 25x50 grid of checkboxes
    for (let i = 0; i < img.width / q; i++) {
        let list = [];
        for (let j = 0; j < img.height / q; j++) {
            const el = document.createElement('input');
            el.setAttribute("type", "checkbox");
            el.setAttribute("id", `{"x":${i}, "y":${j}}`);
            document.body.appendChild(el);
            list.push(el);
        }
        const el = document.createElement('br');
        document.body.appendChild(el);
        checkboxlist.push(list);
    }
    
    checkboxlist.forEach(el => {
        el.forEach(el2 => {
            const position = JSON.parse(el2.id);
            const color = ctx.getImageData(position.x, position.y, 1, 1);
            el2.checked = (color[0] + color[1] + color[2]) / 3 < 128
        });
    })
