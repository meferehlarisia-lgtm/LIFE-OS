// ================= LIFE OS PROFILE =================

document.addEventListener("DOMContentLoaded", function () {


    // ================= SIDEBAR =================

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.querySelector(".sidebar");

    if (menuBtn && sidebar) {

        menuBtn.addEventListener("click", function () {

            sidebar.classList.toggle("active");

        });

    }


    // ================= PROFILE MODAL =================

    const editProfileBtn =
        document.getElementById("editProfileBtn");

    const profileModal =
        document.getElementById("profileModal");

    const closeModal =
        document.getElementById("closeModal");

    const cancelEdit =
        document.getElementById("cancelEdit");


    function openModal() {

        profileModal.classList.add("active");

    }


    function closeProfileModal() {

        profileModal.classList.remove("active");

    }


    if (editProfileBtn) {

        editProfileBtn.addEventListener(
            "click",
            openModal
        );

    }


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeProfileModal
        );

    }


    if (cancelEdit) {

        cancelEdit.addEventListener(
            "click",
            closeProfileModal
        );

    }


    // Close when clicking outside modal

    if (profileModal) {

        profileModal.addEventListener(
            "click",
            function (event) {

                if (event.target === profileModal) {

                    closeProfileModal();

                }

            }
        );

    }


    // ================= SAVE PROFILE =================

    const profileForm =
        document.getElementById("profileForm");


    if (profileForm) {

        profileForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("editName").value.trim();

                const email =
                    document.getElementById("editEmail").value.trim();

                const phone =
                    document.getElementById("editPhone").value.trim();

                const location =
                    document.getElementById("editLocation").value.trim();


                if (!name || !email) {

                    alert("Please enter your name and email.");

                    return;

                }


                // Update profile header

                document.getElementById(
                    "profileName"
                ).textContent = name;


                document.getElementById(
                    "infoName"
                ).textContent = name;


                document.getElementById(
                    "infoEmail"
                ).textContent = email;


                document.getElementById(
                    "infoPhone"
                ).textContent =
                    phone || "Not provided";


                document.getElementById(
                    "infoLocation"
                ).textContent =
                    location || "Not provided";


                // Update sidebar

                document.getElementById(
                    "sidebarName"
                ).textContent = name.split(" ")[0];


                // Update topbar

                document.getElementById(
                    "topName"
                ).textContent = name.split(" ")[0];


                // Generate initials

                const names = name.split(" ");

                let initials = "";

                names.forEach(function (word) {

                    if (word.length > 0) {

                        initials +=
                            word.charAt(0).toUpperCase();

                    }

                });


                initials =
                    initials.substring(0, 2);


                document.getElementById(
                    "profileInitials"
                ).textContent = initials;


                document.getElementById(
                    "topAvatar"
                ).textContent = initials;


                // Save locally

                localStorage.setItem(
                    "lifeOSProfile",
                    JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        location: location,
                        initials: initials
                    })
                );


                closeProfileModal();


                alert("Profile updated successfully!");

            }
        );

    }


    // ================= LOAD SAVED PROFILE =================

    const savedProfile =
        localStorage.getItem("lifeOSProfile");


    if (savedProfile) {

        const profile =
            JSON.parse(savedProfile);


        document.getElementById(
            "profileName"
        ).textContent = profile.name;


        document.getElementById(
            "infoName"
        ).textContent = profile.name;


        document.getElementById(
            "infoEmail"
        ).textContent = profile.email;


        document.getElementById(
            "infoPhone"
        ).textContent =
            profile.phone || "Not provided";


        document.getElementById(
            "infoLocation"
        ).textContent =
            profile.location || "Not provided";


        document.getElementById(
            "sidebarName"
        ).textContent =
            profile.name.split(" ")[0];


        document.getElementById(
            "topName"
        ).textContent =
            profile.name.split(" ")[0];


        document.getElementById(
            "profileInitials"
        ).textContent =
            profile.initials;


        document.getElementById(
            "topAvatar"
        ).textContent =
            profile.initials;


        document.getElementById(
            "editName"
        ).value = profile.name;


        document.getElementById(
            "editEmail"
        ).value = profile.email;


        document.getElementById(
            "editPhone"
        ).value = profile.phone;


        document.getElementById(
            "editLocation"
        ).value = profile.location;

    }


    // ================= AVATAR BUTTON =================

    const avatarEditBtn =
        document.getElementById("avatarEditBtn");

    if (avatarEditBtn) {

        avatarEditBtn.addEventListener(
            "click",
            function () {

                alert(
                    "Profile photo upload will be connected when the backend is added."
                );

            }
        );

    }


    // ================= LOGOUT =================

    const logoutButton =
        document.querySelector(".account-action.danger");

    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            function () {

                const confirmLogout =
                    confirm("Are you sure you want to log out?");

                if (confirmLogout) {

                    alert("Logout functionality will be connected to the backend.");

                }

            }
        );

    }

});