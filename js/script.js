// Lấy tất cả các phần tử có class là 'dot-container'
const dotContainers = document.querySelectorAll('.dot-container');

// Lặp qua từng dot-container để tạo các chấm tròn
dotContainers.forEach(dotContainer => {
    for (let i = 0; i < 144; i++) {
        // Tạo một phần tử div mới
        const dot = document.createElement('div');
        dot.className = 'dot'; 
        dotContainer.appendChild(dot); 
    }
});
