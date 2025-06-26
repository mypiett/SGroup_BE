# README.md - Tổng hợp cú pháp cơ bản Markdown


## Mục đích của README:

- Giới thiệu project
- Hướng dẫn cài đặt
- Hướng dẫn sử dụng
- Mô tả công nghệ dung
- Ghi chú dev (góp ý, lỗi biết rồi, todo)

---

## Cú pháp Markdown cơ bản:

### 📝 Tiêu đề

| Markdown | Ý nghĩa              | Ví dụ           |
|----------|----------------------|-----------------|
| `#`      | Tiêu đề (H1)         | `# Tiêu đề 1`   |
| `##`     | Tiêu đề nhỏ hơn (H2) | `## Tiêu đề phụ`|

### 🔤 Định dạng chữ

| Markdown    | Ý nghĩa       | Ghi chú            |
|-------------|---------------|--------            |
| `**chữ**`   | In đậm        | Dùng ** thay vì __ |
| `*chữ*`     | In nghiêng    |                    |
| `***chữ***` | Đậm + nghiêng |                    |

### ✅ Checklist

- `[x]` Đã hoàn thành
- `[ ]` Chưa hoàn thành

### 💬 Trích dẫn

| Markdown              | Ý nghĩa             |
|-----------------------|---------------------|
| `>`                   | Trích dẫn đoạn văn  |
| `>>`                  | Trích dẫn lồng nhau |

---

### 📷 Chèn hình ảnh 
```markdown    
![alt text](đường_dẫn_đến_ảnh)
```
### 📏 Kẻ ngang
    ***
    ---
    ___

### Danh sách:
#### Có thứ tự:
1. First item
2. Second item
   - Indented item
   - Indented item

#### Không có thứ tự:
- Mục 1
- Mục 2
  - Mục phụ

### 🌐 Liên kết
| Markdown                                               | Mô tả                  |
| ------------------------------------------------------ | ---------------------- |
| `[Link Text](https://example.com)`                     | Liên kết cơ bản        |
| `[Duck Duck Go](https://duckduckgo.com "Best search")` | Có tooltip             |
| `<https://example.com>`                                | Tự động nhận link      |
| `[text][label]` và `[label]: link`                     | Tham chiếu nhiều nơi   |
| `[![alt text](image-url)](link-url)`                   | Hình ảnh chứa liên kết |


### 💻 Code Block
```js
console.log("Hello Markdown!");
```