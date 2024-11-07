// BookForm.js
export class BookForm {
    constructor() {
        this.formContainer = document.getElementById("book-form");
    }

    render(onSubmit) {
        this.formContainer.innerHTML = `
            <div class="card form-card glassy">
                <div class="card-body">
                    <h2 class="h4 mb-3">Tambah/Edit Buku</h2>
                    <form id="book-form">
                        <div class="mb-3">
                            <label for="title" class="form-label">Judul Buku</label>
                            <input type="text" class="form-control rounded-pill" id="title" placeholder="Judul Buku" required>
                        </div>
                        <div class="mb-3">
                            <label for="author" class="form-label">Penulis</label>
                            <input type="text" class="form-control rounded-pill" id="author" placeholder="Nama Penulis" required>
                        </div>
                        <div class="mb-3">
                            <label for="year" class="form-label">Tahun Terbit</label>
                            <input type="number" class="form-control rounded-pill" id="year" placeholder="Tahun" required>
                        </div>
                        <div class="mb-3">
                            <label for="category" class="form-label">Kategori</label>
                            <select class="form-control rounded-pill" id="category" required>
                                <option value="Fiction">Fiksi</option>
                                <option value="Non-Fiction">Non-Fiksi</option>
                                <option value="Science">Sains</option>
                                <option value="Biography">Biografi</option>
                                <option value="History">Sejarah</option>
                                <option value="Other">Lainnya</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 rounded-pill shadow-neumorphic">Simpan Buku</button>
                    </form>
                </div>
            </div>
        `;

        this.formContainer.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const year = document.getElementById("year").value;
            const category = document.getElementById("category").value;
            onSubmit({ title, author, year, category });
            this.resetForm();
        });
    }

    fillForm(book) {
        document.getElementById("title").value = book.title;
        document.getElementById("author").value = book.author;
        document.getElementById("year").value = book.year;
        document.getElementById("category").value = book.category;
    }

    resetForm() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
        document.getElementById("category").value = "Fiction"; // Default category
    }
}
