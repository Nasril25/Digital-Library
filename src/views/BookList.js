// BookList.js
export class BookList {
    constructor() {
        this.bookListContainer = document.getElementById("book-list");
    }

    render(books, onDelete, onEdit) {
        if (books.length === 0) {
            this.bookListContainer.innerHTML = `<p class="text-center text-white"> Belum ada buku yang ditambahkan.</p>`;
            return;
        }

        this.bookListContainer.innerHTML = `
            <h2 class="h4 mb-3"> Daftar Buku</h2>
            <div class="row">
            ${books
                .map(
                    (book) => `
                    <div class="col-md-6 mb-3">
                        <div class="card shadow-neumorphic book-card glassy">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text mb-1"><strong>Penulis:</strong> ${book.author}</p>
                                <p class="card-text mb-1"><strong>Tahun:</strong> ${book.year}</p>
                                <p class="card-text mb-1"><strong>Kategori:</strong> ${book.category}</p>
                                <div class="d-flex justify-content-end">
                                    <!-- Tombol Edit dengan Ikon Pensil -->
                                    <button class="btn btn-warning btn-sm me-2 edit-btn shadow-neumorphic" data-id="${book.id}">
                                        <i class="bi bi-pencil"></i> Edit
                                    </button>
                                    <!-- Tombol Hapus dengan Ikon Sampah -->
                                    <button class="btn btn-danger btn-sm delete-btn shadow-neumorphic" data-id="${book.id}">
                                        <i class="bi bi-trash"></i> Hapus
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                )
                .join("")}
            </div>
        `;

        // Menambahkan event listener untuk tombol Hapus
        this.bookListContainer.querySelectorAll(".delete-btn").forEach((button) => {
            button.addEventListener("click", () => onDelete(button.dataset.id));
        });

        // Menambahkan event listener untuk tombol Edit
        this.bookListContainer.querySelectorAll(".edit-btn").forEach((button) => {
            button.addEventListener("click", () => onEdit(button.dataset.id));
        });
    }
}
