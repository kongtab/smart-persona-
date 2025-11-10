import React from "react";

export default function RegisterPage() {
  return (
    <div className="page-root text-center">
      <header className="site-header">
        <div className="container">
          <div className="header-title">PerFile</div>
        </div>
      </header>

      <main className="page-wrapper">
        <div className="register-content">

          <h1 className="title">สร้างบัญชีใหม่</h1>
          <p className="subtitle">กรอกข้อมูลเพื่อลงทะเบียน</p>

          <form className="form-group">

            <div className="form-field">
              <label>ชื่อผู้ใช้</label>
              <input type="text" placeholder="เช่น: yourname" />
            </div>

            <div className="form-field">
              <label>อีเมล</label>
              <input type="email" placeholder="example@mail.com" />
            </div>

            <div className="form-field">
              <label>รหัสผ่าน</label>
              <input type="password" placeholder="********" />
            </div>

            <button type="submit" className="btn btn-brand mt-4 w-full">
              ลงทะเบียน
            </button>

          </form>

          <hr className="divider" />

          <p className="login-text">
            มีบัญชีอยู่แล้ว? <a href="#" className="link-brand">เข้าสู่ระบบ</a>
          </p>

        </div>
      </main>

      <footer className="site-footer"></footer>
    </div>
  );
}
