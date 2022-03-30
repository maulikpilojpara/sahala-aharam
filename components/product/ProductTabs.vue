<template>
  <div class="details-tabs" @click="switchTab($event)">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="Description-tab"
          data-bs-toggle="tab"
          data-bs-target="#Description"
          type="button"
          role="tab"
          aria-controls="Description"
          aria-selected="true"
        >
          Description
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="Review-tab"
          data-bs-toggle="tab"
          data-bs-target="#Review"
          type="button"
          role="tab"
          aria-controls="Review"
          aria-selected="false"
        >
          Review
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="Description" role="tabpanel">
        <p>
          <b
            >In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a docubefore the fin
            a placeholder text commonly used to demonstrate the visual form of a
            document or a typeface without relying on meaningfulused to
            demonstratee.</b
          >
        </p>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a docubefore the fin a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningfulused to
          demonstrate the visual form of a docubefore the fin a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningfulused to demonstrate the visual
          form of a docubefore the fin a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before the final copy is available.
        </p>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a docubefore the fin a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningfulused to
          demonstrate the visual form of a docubefore the fin a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningfulused to demonstrate the visual
          form of a docubefore the fin a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before the final copy is available.In publishing and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a docubefore the fin a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningfulused to demonstrate the visual
          form of a docubefore the fin a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningfulused to demonstrate the visual form of a
          docubefore the fin a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before the final
          copy is available.
        </p>
      </div>
      <div class="tab-pane fade" id="Review" role="tabpanel">
        <p>
          <b
            >In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a docubefore the fin
            a placeholder text commonly used to demonstrate the visual form of a
            document or a typeface without relying on meaningfulused to
            demonstratee.</b
          >
        </p>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a docubefore the fin a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningfulused to
          demonstrate the visual form of a docubefore the fin a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningfulused to demonstrate the visual
          form of a docubefore the fin a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before the final copy is available.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTabs",
  methods: {
    switchTab(e) {
      let tab = e.target.dataset.bsTarget;
      if(!tab) return;
      let tabContent = document.querySelector(tab);
      let tabNav = document.querySelectorAll(".nav-link");
      tabNav.forEach(item => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
      let tabPane = document.querySelectorAll(".tab-pane");
      tabPane.forEach(item => {
        item.classList.remove("show");
        item.classList.remove("active");
      });
      tabContent.classList.add("show");
      tabContent.classList.add("active");
    }
  }
};
</script>
