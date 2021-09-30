<script>
  import { onMount } from "svelte";

  let apiURL = process.env.API_URL;

  const showAllUsers = async () => {
    fetch(`${apiURL}/users`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };

  let userId;

  const showUsersById = async () => {
    fetch(`${apiURL}/users/${userId}`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };

  // const showUsersByIDs = async () => {
  //   fetch(`/users/?categories=${userId}`)
  //     .then((rawRes) => rawRes.json())
  //     .then((jsonRes) => console.log(jsonRes));
  // };

  let userName;
  let userEmail;
  let userPwHash;
  let userPhone;
  let userIsAdmin;
  let userStreet;
  let userApartment;
  let userZip;
  let userCity;
  let userCountry;
  let userUnhasedPW;

  onMount(() => {
    userId = "userId";
    userName = "userName";
    userEmail = "userEmail";
    userPwHash = "userPwHash";
    userPhone = "userPhone";
    userIsAdmin = "userIsAdmin";
    userStreet = "userStreet";
    userApartment = "userApartment";
    userZip = "userZip";
    userCity = "userCity";
    userCountry = "userCountry";
    userUnhasedPW = "userUnhasedPW";
  });

  const addUser = async () => {
    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPwHash,
        phone: userPhone,
        isAdmin: userIsAdmin,
        street: userStreet,
        apartment: userApartment,
        zip: userZip,
        city: userCity,
        country: userCountry,
      }),
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateUser = async () => {
    fetch(`/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        name: userName,
        email: userEmail,
        password: userPwHash,
        phone: userPhone,
        isAdmin: userIsAdmin,
        street: userStreet,
        price: userApartment,
        zip: userZip,
        city: userCity,
        country: userCountry,
      }),
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteUser = async () => {
    fetch(`/users/${userId}`, {
      method: "DELETE",
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const countUsers = async () => {
    fetch(`/users/get/count`)
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const userLogin = async () => {
    fetch(`/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userUnhasedPW,
        // userId: userId,
        // isAdmin: userIsAdmin,
      }),
    })
      .then((rawRes) => rawRes.json())
      .then((jsonRes) => console.log(jsonRes));
  };
</script>

<div style="padding: 0 1rem">
  <div class="flexbox">
    <!-- //////////////showAllUsers//////////////////////////// -->
    <div>
      <div style="text-align:center">
        <button on:click="{showAllUsers}">showAllUsers</button>
      </div>
    </div>

    <!-- //////////////showUsersById//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="showUsersById">Show Users By ID</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="showUsersById"
          name="showUsersById"
          required
          bind:value="{userId}" />
      </div>
      <div style="text-align:center">
        <button on:click="{showUsersById}">showUsersById</button>
      </div>

      <!-- <div style="text-align:center;">
        <label for="showUsersByIDs">Show Users By IDs</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="showUsersByIDs"
          name="showUsersByIDs"
          required
          bind:value="{userId}" />
      </div>
      <div style="text-align:center">
        <button on:click="{showUsersByIDs}">showUsersByIDs</button>
      </div> -->
    </div>

    <!-- //////////////addUser//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="addUser">Add User</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUser"
          name="addUser"
          required
          bind:value="{userName}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserEmail"
          name="addUserEmail"
          required
          bind:value="{userEmail}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserPwHash"
          name="addUserPwHash"
          required
          bind:value="{userPwHash}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserPhone"
          name="addUserPhone"
          required
          bind:value="{userPhone}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserIsAdmin"
          name="addUserIsAdmin"
          required
          bind:value="{userIsAdmin}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserStreet"
          name="addUserStreet"
          required
          bind:value="{userStreet}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserApt"
          name="addUserApt"
          required
          bind:value="{userApartment}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserZip"
          name="addUserZip"
          required
          bind:value="{userZip}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserCity"
          name="addUserCity"
          required
          bind:value="{userCity}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="addUserCountry"
          name="addUserCountry"
          required
          bind:value="{userCountry}" />
      </div>
      <div style="text-align:center">
        <button on:click="{addUser}">addUser</button>
      </div>
    </div>

    <!-- //////////////updateUser//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="updateUser">Update User</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserId"
          name="updateUserId"
          required
          bind:value="{userId}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserName"
          name="updateUserName"
          required
          bind:value="{userName}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserEmail"
          name="updateUserEmail"
          required
          bind:value="{userEmail}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserPwHash"
          name="updateUserPwHash"
          required
          bind:value="{userPwHash}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserPhone"
          name="updateUserPhone"
          required
          bind:value="{userPhone}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserIsAdmin"
          name="updateUserIsAdmin"
          required
          bind:value="{userIsAdmin}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserStreet"
          name="updateUserStreet"
          required
          bind:value="{userStreet}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserApt"
          name="updateUserApt"
          required
          bind:value="{userApartment}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserZip"
          name="updateUserZip"
          required
          bind:value="{userZip}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserCity"
          name="updateUserCity"
          required
          bind:value="{userCity}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="updateUserCountry"
          name="updateUserCountry"
          required
          bind:value="{userCountry}" />
      </div>
      <div style="text-align:center">
        <button on:click="{updateUser}">updateUser</button>
      </div>
    </div>
    <!-- //////////////deleteUser//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="deleteUser">Delete User</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="deleteUsersById"
          name="deleteUsersById"
          required
          bind:value="{userId}" />
      </div>
      <div style="text-align:center">
        <button on:click="{deleteUser}">deleteUser</button>
      </div>
    </div>
    <!-- //////////////countUsers//////////////////////////// -->
    <div>
      <div style="text-align:center">
        <button on:click="{countUsers}">countUsers</button>
      </div>
    </div>
    <!-- //////////////userLogin//////////////////////////// -->
    <div>
      <div style="text-align:center;">
        <label for="userLogin">User Login</label>
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="userEmail"
          name="userEmail"
          required
          bind:value="{userEmail}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="userUnhasedPW"
          name="userUnhasedPW"
          required
          bind:value="{userUnhasedPW}" />
      </div>
      <!-- <div style="text-align:center">
        <input
          type="text"
          id="userId"
          name="userId"
          required
          bind:value="{userId}" />
      </div>
      <div style="text-align:center">
        <input
          type="text"
          id="userIsAdmin"
          name="userIsAdmin"
          required
          bind:value="{userIsAdmin}" />
      </div> -->
      <div style="text-align:center">
        <button on:click="{userLogin}">userLogin</button>
      </div>
    </div>
  </div>
</div>
