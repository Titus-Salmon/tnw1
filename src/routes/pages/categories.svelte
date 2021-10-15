<script>
  import { onMount } from "svelte";

  let apiURL = process.env.API_URL;

  //if you want to fetch a specific category id, use the following: fetch("/categories/id"), i.e.:
  //fetch("/categories/613c35d6fdb64edf5397071a")
  // onMount(async () => {
  //   fetch("/categories")
  //     .then((rawRes) => rawRes.json())
  //     .then((jsonRes) => console.log(jsonRes));
  // });

  const showAllCategories = async () => {
    fetch(`${apiURL}/categories`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };

  let catId = "category ID";

  const showCategoriesById = async () => {
    console.log(`catId==> ${catId}`);
    fetch(`${apiURL}/categories/${catId}`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };

  let catName;
  let catIcon;
  let catColor;

  const addCategory = async () => {
    fetch(`${apiURL}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: catName.value,
        icon: catIcon.value,
        color: catColor.value,
      }),
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateCategory = async () => {
    fetch(`${apiURL}/categories/${catId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: catName.value,
        icon: catIcon.value,
        color: catColor.value,
      }),
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteCategory = async () => {
    fetch(`${apiURL}/categories/${catId}`, {
      method: "DELETE",
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };
</script>

<div style="padding: 0 1rem">
  <div class="flexbox">
    <!-- //////////////showAllCategories//////////////////////////// -->
    <div>
      <div style="text-align:center">
        <button on:click="{showAllCategories}">showAllCategories</button>
      </div>
    </div>

    <!-- //////////////showCategoriesById//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="showCategoriesById">Show Categories By ID</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="showCategoriesById"
          name="showCategoriesById"
          required
          bind:value="{catId}" />
      </div>
      <div style="text-align:center">
        <button on:click="{showCategoriesById}">showCategoriesById</button>
      </div>
    </div>

    <!-- //////////////addCategory//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="addCategory">Add Category</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addCatName"
          name="addCatName"
          required
          value="name"
          bind:this="{catName}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addCatIcon"
          name="addCatIcon"
          required
          value="icon"
          bind:this="{catIcon}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addCatColor"
          name="addCatColor"
          required
          value="color"
          bind:this="{catColor}" />
      </div>
      <div style="text-align:center">
        <button on:click="{addCategory}">addCategory</button>
      </div>
    </div>

    <!-- //////////////updateCategory//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="updateCategory">Update Category</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="showCategoriesById"
          name="showCategoriesById"
          required
          bind:value="{catId}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateCatName"
          name="updateCatName"
          required
          value="name"
          bind:this="{catName}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateCatIcon"
          name="updateCatIcon"
          required
          value="icon"
          bind:this="{catIcon}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateCatColor"
          name="updateCatColor"
          required
          value="color"
          bind:this="{catColor}" />
      </div>
      <div style="text-align:center">
        <button on:click="{updateCategory}">updateCategory</button>
      </div>
    </div>
    <!-- //////////////deleteCategory//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="deleteCategory">Delete Category</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="deleteCategoriesById"
          name="deleteCategoriesById"
          required
          bind:value="{catId}" />
      </div>
      <div style="text-align:center">
        <button on:click="{deleteCategory}">deleteCategory</button>
      </div>
    </div>
  </div>
</div>
