# anonymous-box-chat
### Giao tiếp trực tiếp 
Có hạn chế thời gian refresh lại trang (180s)
### Xem demo trực tiếp tại: [Demo](http://dinhthaison.glitch.me/)
- - -
## Hướng dẫn sử dụng:
Mỗi lần Refresh lại trang sẽ phải nhập nickname 1 lần (Đảm bảo tính nặc danh)

![image](https://user-images.githubusercontent.com/87920408/187262409-27e450d9-a443-459c-ac55-b47a301a6fa5.png)

Giao diện (Bấm vào để xem cho rõ)

![image](https://user-images.githubusercontent.com/87920408/187262329-5143ba3f-3791-48d2-b6a9-4602328a245d.png)

Cơ chế Refresh lại trang sau 180s:
```
<script type="text/javascript">
      function reFresh() {
        window.open(location.reload(true));
      }
      window.setInterval("reFresh()",180000);
</script>
```
Khi có từ 2 thiết bị (Hoặc đơn giản là có thể trên cùng 1 máy, cùng 1 trình duyệt, đặt tên nickname và nhắn thì phía còn lại và tất cả những người dùng tham gia đồng thời đều nhận được tin nhắn như này)

![image](https://user-images.githubusercontent.com/87920408/187262952-ef7d55f4-0be0-428f-9fdd-404fd4373330.png)

Trong khi đó, tại Network --> WS, chúng ta bắt được sự kiện (Lý do từ code trong index.js)

![image](https://user-images.githubusercontent.com/87920408/187267372-c4eb561d-a123-40a3-b60b-488712fa0cad.png)

Và đó là cách hoạt động (backend) của trang web này

# Tác giả
Author: [Son Dinh Thai](https://iamironman1233.github.io/page/about/)
