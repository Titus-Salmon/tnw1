<script>
  import { onMount } from "svelte";

  let apiURL = process.env.API_URL;

  //if you want to fetch a specific category id, use the following: fetch("/products/id"), i.e.:
  //fetch("/products/613c35d6fdb64edf5397071a")
  // onMount(async () => {
  //   fetch("/products")
  //     .then((rawRes) => rawRes.json())
  //     .then((jsonRes) => console.log(jsonRes));
  // });

  const showAllProducts = async () => {
    fetch(`${apiURL}/products`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };

  let prodId;

  const showProductsById = async () => {
    fetch(`${apiURL}/products/${prodId}`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };

  const showProductsByIDs = async () => {
    fetch(`${apiURL}/products/?categories=${prodId}`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };

  let prodName;
  let prodDescr;
  let prodRichDescr;
  let prodImage;
  let prodBrand;
  let prodCost;
  let prodPrice;
  let prodCategory;
  let prodCountInStock;
  let prodRating;
  let prodNumReviews;
  let prodIsFeatured;
  let featProdsNum;

  onMount(() => {
    prodId = "product ID";
    prodName = "name";
    prodDescr = "descr";
    prodRichDescr = "rich descr";
    prodImage = "imgurl";
    prodBrand = "nabrandme";
    prodCost = "cost";
    prodPrice = "price";
    prodCategory = "category ID";
    prodCountInStock = "count in stock";
    prodRating = "rating";
    prodNumReviews = "numb reviews";
    prodIsFeatured = "is featured (yes/no)";
    featProdsNum = "# featured products to show";
  });

  const addProduct = async () => {
    fetch(`${apiURL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: prodName,
        description: prodDescr,
        richDescription: prodRichDescr,
        image: prodImage,
        brand: prodBrand,
        cost: prodCost,
        price: prodPrice,
        category: prodCategory,
        countInStock: prodCountInStock,
        rating: prodRating,
        numReviews: prodNumReviews,
        isFeatured: prodIsFeatured,
      }),
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateProduct = async () => {
    fetch(`${apiURL}/products/${prodId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prodId: prodId,
        name: prodName,
        description: prodDescr,
        richDescription: prodRichDescr,
        image: prodImage,
        brand: prodBrand,
        cost: prodCost,
        price: prodPrice,
        category: prodCategory,
        countInStock: prodCountInStock,
        rating: prodRating,
        numReviews: prodNumReviews,
        isFeatured: prodIsFeatured,
      }),
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteProduct = async () => {
    fetch(`${apiURL}/products/${prodId}`, {
      method: "DELETE",
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const countProducts = async () => {
    fetch(`${apiURL}/products/get/count`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getFeatProds = async () => {
    fetch(`${apiURL}/products/get/featured/${featProdsNum}`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };
</script>

<div style="padding: 0 1rem">
  <div class="flexbox">
    <!-- //////////////showAllProducts//////////////////////////// -->
    <div>
      <div style="text-align:center">
        <button on:click="{showAllProducts}">showAllProducts</button>
      </div>
    </div>

    <!-- //////////////showProductsById//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="showProductsById">Show Products By ID</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="showProductsById"
          name="showProductsById"
          required
          bind:value="{prodId}" />
      </div>
      <div style="text-align:center">
        <button on:click="{showProductsById}">showProductsById</button>
      </div>

      <div style="text-align:center;">
        <label for="showProductsByIDs">Show Products By Category IDs</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="showProductsByIDs"
          name="showProductsByIDs"
          required
          bind:value="{prodId}" />
      </div>
      <div style="text-align:center">
        <button on:click="{showProductsByIDs}">showProductsByIDs</button>
      </div>
    </div>

    <!-- //////////////addProduct//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="addProduct">Add Product</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdName"
          name="addProdName"
          required
          bind:value="{prodName}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdDescr"
          name="addProdDescr"
          required
          bind:value="{prodDescr}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdRichDescr"
          name="addProdRichDescr"
          required
          bind:value="{prodRichDescr}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdImage"
          name="addProdImage"
          required
          bind:value="{prodImage}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdBrand"
          name="addProdBrand"
          required
          bind:value="{prodBrand}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdCost"
          name="addProdCost"
          required
          bind:value="{prodCost}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdPrice"
          name="addProdPrice"
          required
          bind:value="{prodPrice}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdCategory"
          name="addProdCategory"
          required
          bind:value="{prodCategory}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdCountInStock"
          name="addProdCountInStock"
          required
          bind:value="{prodCountInStock}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdRating"
          name="addProdRating"
          required
          bind:value="{prodRating}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdNumReviews"
          name="addProdNumReviews"
          required
          bind:value="{prodNumReviews}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addProdIsFeatured"
          name="addProdIsFeatured"
          required
          bind:value="{prodIsFeatured}" />
      </div>
      <div style="text-align:center">
        <button on:click="{addProduct}">addProduct</button>
      </div>
    </div>

    <!-- //////////////updateProduct//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="updateProduct">Update Product</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdId"
          name="updateProdId"
          required
          bind:value="{prodId}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdName"
          name="updateProdName"
          required
          bind:value="{prodName}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdDescr"
          name="updateProdDescr"
          required
          bind:value="{prodDescr}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdRichDescr"
          name="updateProdRichDescr"
          required
          bind:value="{prodRichDescr}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdImage"
          name="updateProdImage"
          required
          bind:value="{prodImage}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdBrand"
          name="updateProdBrand"
          required
          bind:value="{prodBrand}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdCost"
          name="updateProdCost"
          required
          bind:value="{prodCost}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdPrice"
          name="updateProdPrice"
          required
          bind:value="{prodPrice}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdCategory"
          name="updateProdCategory"
          required
          bind:value="{prodCategory}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdCountInStock"
          name="updateProdCountInStock"
          required
          bind:value="{prodCountInStock}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdRating"
          name="updateProdRating"
          required
          bind:value="{prodRating}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdNumReviews"
          name="updateProdNumReviews"
          required
          bind:value="{prodNumReviews}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateProdIsFeatured"
          name="updateProdIsFeatured"
          required
          bind:value="{prodIsFeatured}" />
      </div>
      <div style="text-align:center">
        <button on:click="{updateProduct}">updateProduct</button>
      </div>
    </div>
    <!-- //////////////deleteProduct//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="deleteProduct">Delete Product</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="deleteProductsById"
          name="deleteProductsById"
          required
          bind:value="{prodId}" />
      </div>
      <div style="text-align:center">
        <button on:click="{deleteProduct}">deleteProduct</button>
      </div>
    </div>
    <!-- //////////////countProducts//////////////////////////// -->
    <div>
      <div style="text-align:center">
        <button on:click="{countProducts}">countProducts</button>
      </div>
    </div>
    <!-- //////////////getFeatProds//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="getFeatProds">Featured Products</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="getFeatProds"
          name="getFeatProds"
          required
          bind:value="{featProdsNum}" />
      </div>
      <div style="text-align:center">
        <button on:click="{getFeatProds}">getFeatProds</button>
      </div>
    </div>
  </div>
</div>
