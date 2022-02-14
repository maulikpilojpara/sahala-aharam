<template>
  <div class="nav-sidebar" data-scrollbar>
    <div class="header-info-close d-block d-xl-none">
      <span></span>
      <span></span>
    </div>
    <div class="sidebar-top-wrap">
      <div class="sidebar-logo">
        <a href="index.html" class="logo">
          <img src="/logo.svg" />
          <h3>Organic Stores</h3>
        </a>
      </div>
      <nav>
        <h5>Shop</h5>
        <ul class="nav-menu">
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/oils.svg" alt="" /></span
              >Oils
            </a>
          </li>
          <li class="active">
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Pulses.svg" alt="" /></span
              >Pulses
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Cereals.svg" alt="" /></span
              >Cereals
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Millets.svg" alt="" /></span
              >Millets
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Oil-Seeds.svg" alt="" /></span
              >Oil Seeds
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Sweetners.svg" alt="" /></span
              >Sweetners
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Flours-Suji.svg" alt="" /></span
              >Flours & Suji
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Health-Care.svg" alt="" /></span
              >Health Care
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Processed-Foods.svg" alt="" /></span
              >Processed Foods
            </a>
          </li>
        </ul>
        <div class="nav-view-all">
          <a href="#"><u>View All +</u></a>
        </div>
      </nav>
    </div>
    <div class="sidebar-bottom-wrap">
      <nav>
        <h5>ACCOUNT</h5>
        <ul class="nav-menu">
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Profile.svg" alt="" /></span
              >Profile
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Wishlist.svg" alt="" /></span
              >Wishlist
              <span class="nav-budge">0</span>
            </a>
          </li>
        </ul>
        <div class="nav-btn">
          <a href="#">
            <span class="icon"
              ><img src="/nav-icons/nav-login.svg" alt=""
            /></span>
            Login / Sign Up
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavSidebar",
};
</script>

<style scoped>
.nav-sidebar {
  height: 100vh;
  width: 17%;
  background: var(--light);
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow: auto;
  top: 0;
  position: sticky !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  z-index: 9;
}

.nav-sidebar h5 {
  text-transform: uppercase;
  font-size: 12px;
  margin: 0 0 10px;
  color: #C9C9C9;
  padding-left: 10px;
}

.nav-sidebar .nav-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-sidebar .nav-menu>li+li {
  margin-top: 3px;
}

.nav-sidebar .nav-menu>li>a {
  display: block;
  color: var(--dark);
  padding: 10px 10px 10px 45px;
  position: relative;
  line-height: 16px;
  border-radius: 6px;
}

.nav-sidebar .nav-menu>li.active>a,
.nav-sidebar .nav-menu>li>a:hover {
  background: rgba(108, 190, 71, 0.12);
}

.nav-sidebar .nav-menu>li>a .icon {
  display: flex;
  position: absolute;
  left: 10px;
  top: 5px;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
}

.nav-sidebar .nav-menu>li>a .icon img {
  max-height: 100%;
}

.sidebar-bottom-wrap {
  margin-top: 30px;
}

.nav-view-all {
  margin-top: 14px;
  font-size: 14px;
  padding-left: 10px;
}

.nav-menu .nav-budge {
  color: #fff;
  background: var(--primary);
  border-radius: 50px;
  padding: 0 2px;
  min-width: 16px;
  line-height: 16px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  margin-left: 2px;
}

.nav-btn {
  margin-top: 20px;
}

.nav-btn a {
  display: block;
  background: var(--primary);
  padding: 8px 10px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  border-radius: 5px;
}

.nav-btn a .icon {
  display: inline-block;
  vertical-align: top;
  width: 22px;
  margin-right: 4px;
}

.nav-btn a:hover {
  background: var(--dark);
  color: #fff;
}
</style>
