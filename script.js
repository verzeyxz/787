document.addEventListener('DOMContentLoaded', () => {
    const myAwesomeModal = document.getElementById('myAwesomeModal');
    const openLinkBtn = document.getElementById('openLinkBtn'); // ปุ่มสำหรับเปิดลิงก์
    const closeModalBtnOutside = document.getElementById('closeModalBtnOutside'); // ปุ่ม "ปิด"
    const closeIcon = myAwesomeModal.querySelector('.close-icon'); // ไอคอน X
    const modalContent = myAwesomeModal.querySelector('.modal-content');

    let previouslyFocusedElement = null;

    // Function to open the modal (จะถูกเรียกทันทีเมื่อหน้าเว็บโหลด)
    function openModal() {
        previouslyFocusedElement = document.activeElement;
        myAwesomeModal.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
        modalContent.focus(); // Set focus to the modal content
    }

    // Function to close the modal
    function closeModal() {
        myAwesomeModal.classList.remove('is-visible');
        document.body.style.overflow = '';
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
        }
    }

    // Function to open link in a new tab
    function openLinkInNewTab() {
        const link = openLinkBtn.dataset.link; // ดึงค่าจาก data-link attribute
        if (link) {
            window.open(link, '_blank'); // เปิดลิงก์ในแท็บใหม่
            closeModal(); // ปิด Modal หลังจากเปิดลิงก์ (เลือกได้ว่าจะปิดหรือไม่)
        }
    }

    // --- Event Listeners ---

    // 1. เปิด Modal ทันทีเมื่อหน้าเว็บโหลด
    openModal();

    // 2. Event listener สำหรับปุ่มที่ต้องการเปิดลิงก์
    openLinkBtn.addEventListener('click', openLinkInNewTab);

    // 3. Event listeners สำหรับปุ่มปิด Modal (ปุ่ม 'ปิด' และไอคอน 'X')
    closeModalBtnOutside.addEventListener('click', closeModal);
    closeIcon.addEventListener('click', closeModal);

    // 4. ปิด Modal เมื่อคลิกนอก Modal content (บน overlay)
    myAwesomeModal.addEventListener('click', (event) => {
        if (event.target === myAwesomeModal) {
            closeModal();
        }
    });

    // 5. ปิด Modal เมื่อกดปุ่ม ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && myAwesomeModal.classList.contains('is-visible')) {
            closeModal();
        }
    });

    // Make modalContent programmatically focusable
    modalContent.setAttribute('tabindex', '-1');
});
