import React from "react";

function Sidebar() {
  return (
    <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex flex-row gap-5 md:flex-col">
      <a href="https://www.instagram.com/hey_im_kavi.01/" className="text-white text-xl hover:text-orange-500">
      <i class="bi bi-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/uvindu-suraweera-03b527216/" className="text-white text-xl hover:text-orange-500">
      <i class="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/kavi20011211" className="text-white text-xl hover:text-orange-500">
      <i class="bi bi-github"></i>
      </a>
    </div>
  );
}

export default Sidebar;
