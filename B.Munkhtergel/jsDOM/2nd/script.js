const btn = document.querySelector('#btn');
        const container = document.querySelector('.container');
        const url = document.querySelector('#url');
        const modal = document.querySelector('.modal');

        let imgURL = '';


        const images = [];

        function resetInput() {
            url.value = ''
        }
    
        btn.addEventListener('click', () => {
            images.push(url.value);
            resetInput();
            container.innerHTML = '';
            displayImages();
            
            // document.body.insertAdjacentHTML('beforeend', '<p>123</p>')
        })

        function displayImages() {
            images.forEach(el => {
                if (el){
                    container.insertAdjacentHTML('beforeend', `
                        <div style="background-image: url(${el})" class="h-64 box rounded-3xl bg-cover bg-center overflow-hidden shadow-xl bg-red-400 relative">
                             <div id="closeBtn" class="h-10 closeBtn w-10 flex items-center justify-center absolute right-4 top-4 border border-white rounded-full transition duration-300 hover:bg-red-400 hover:text-white cursor-pointer transform translate-x-16 bg-white">
                                <i class="fas fa-times" id="closeBtn"></i>
                            </div>
                        </div>
                    `)
                }
            })
        }

        document.addEventListener('click', e => {
            if(e.target.classList.contains('box')){
                modal.classList.remove('hidden');
                imgURL = e.target.style.backgroundImage.split('"')[1];
    
                modal.children[0].children[1].children[0].src = imgURL;
            }

            if (e.target.id === 'close') {
                modal.classList.add('hidden')
            }

            if (e.target.classList.contains('modal')) {
                modal.classList.add('hidden')
            }

            if(e.target.id === 'closeBtn'){
                imgURL = e.target.parentNode.style.backgroundImage.split('"')[1];
                let index = images.findIndex(el => el === imgURL)
                images.splice(index, 1);
                container.innerHTML = '';
                displayImages();
            } 
            
            if(e.target.classList.contains('x1') || e.target.classList.contains('x2')){
                modal.classList.add('hidden');
            }
        })
