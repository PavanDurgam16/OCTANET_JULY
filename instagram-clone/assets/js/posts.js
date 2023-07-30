// Function to generate random username
function generateRandomUsername() {
	const usernames = [
		"Pavan_insta16",
		"Edison_123",
		"john_doe",
		"alice_wonley",
		"jane_smith",
		"manish_17",
		"john_diggle",
		"sai0011",
		"steve_smith_3",
		"jenkinsorange_1",
		"alle_1_y",
		"kevin_67",
		"P_Newton",
	];
	return usernames[Math.floor(Math.random() * usernames.length)];
}

let arr = ["indian", "american", "asian", "man", "woman"];

// Array of avatar links
const avatarLinks = [
	"https://source.unsplash.com/200x200/?portrait," + arr[0] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[3] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[1] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[2] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[1] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[0] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[3] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[1] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[2] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[0] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[1] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[2] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[4] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[3] + "person",
	"https://source.unsplash.com/200x200/?portrait," + arr[4] + "person",
];

// Function to generate random post media link
function generateRandomPostMedia() {
	const postMediaLinks = [
		"nature",
		"food",
		"travel",
		"architecture",
		"city",
		"person",
		"grasshills",
	];
	return (
		"https://source.unsplash.com/600x450/?" +
		postMediaLinks[Math.floor(Math.random() * postMediaLinks.length)]
	);
}

// Array of descriptions
const descriptions = [
	"Sunset over the serene horizon, casting a warm golden glow on the tranquil waters. Nature's masterpiece in all its glory.",
	"A mesmerizing view of lush green valleys and rolling hills, where time seems to stand still.",
	"Exploring the hidden gems of the world, stumbling upon breathtaking landscapes that take your breath away.",
	"In the heart of the enchanted forest, where sun rays filter through the canopy, creating a magical ambiance.",
	"Lost in the vast wilderness, surrounded by towering mountains and untouched wilderness.",
	"The beauty of the ocean, with waves crashing against rugged cliffs, evoking a sense of wonder and awe.",
	"Capturing fleeting moments of joy and laughter, freezing memories to cherish forever.",
	"Amidst the bustling city, finding solace in a quaint café, sipping coffee and watching life go by.",
	"Adventuring into uncharted territory, where every step unravels a new story waiting to be told.",
	"Wandering through ancient ruins, where history whispers its secrets through the stones.",
	"Dancing in the rain, embracing the refreshing drops that cleanse the soul.",
	"Basking in the warm embrace of the sun, feeling its energy infuse every fiber of your being.",
	"The symphony of colors during the fall season, painting the world in hues of red, orange, and gold.",
	"Lost in a good book, traveling to far-off lands and immersing oneself in captivating narratives.",
	"Chasing sunsets and capturing the beauty of the changing sky as day transitions into night.",
	"A starry night sky, where constellations come alive, sparking dreams and inspiring wonder.",
	"Discovering hidden alleys and cobblestone streets, where history blends seamlessly with modernity.",
	"Roaming through vibrant markets, embracing the diverse cultures and flavors of the world.",
	"Time standing still in the presence of majestic ancient architecture, a testament to human ingenuity.",
	"Embarking on a road trip to explore the unknown, with endless possibilities on the horizon.",
];

// Function to generate random post likes
function generateRandomPostLikes() {
	return Math.floor(Math.random() * 100);
}

let i = 1;

// Function to generate random post date
function generateRandomPostDate() {
	if (i % 2 == 0) {
		i++;
		return Math.floor(Math.random() * 60) + " minutes ago";
	} else {
		i++;
		return Math.floor(Math.random() * 10) + " days ago";
	}
}

// Array of comments with users and text
const comments = [
	{ username: "john_doe_123", commentText: "This is a great post!" },
	{ username: "jane_smith_456", commentText: "Amazing shot!" },
	{ username: "alex_williams_789", commentText: "Beautiful scenery!" },
	{ username: "lisa_johnson_321", commentText: "Love this!" },
	{ username: "robert_miller_987", commentText: "Stunning view!" },
	{ username: "emily_davis_654", commentText: "Awesome picture!" },
	{ username: "michael_taylor_246", commentText: "So cool!" },
	{ username: "olivia_anderson_135", commentText: "Nice one!" },
	{ username: "william_thomas_789", commentText: "Great capture!" },
	{ username: "sophia_jackson_246", commentText: "Impressive!" },
	{ username: "david_white_987", commentText: "Lovely photo!" },
	{ username: "emma_brown_456", commentText: "Fantastic shot!" },
	{ username: "james_jones_123", commentText: "Beautiful shot!" },
	{ username: "ava_clark_135", commentText: "Amazing scenery!" },
	{ username: "oliver_hall_654", commentText: "Well done!" },
	{ username: "mia_johnson_789", commentText: "Incredible view!" },
	{ username: "amelia_martin_321", commentText: "Love it!" },
	{ username: "ethan_lee_987", commentText: "Perfect capture!" },
	{ username: "sophie_perez_456", commentText: "Wonderful photo!" },
	{ username: "benjamin_turner_246", commentText: "Awesome view!" },
	{ username: "chloe_hernandez_135", commentText: "Nice shot!" },
	{ username: "daniel_moore_654", commentText: "Excellent picture!" },
	{ username: "mia_ward_789", commentText: "Impressive shot!" },
	{ username: "harry_murphy_123", commentText: "Lovely scenery!" },
	{ username: "ava_evans_246", commentText: "Beautiful view!" },
	{ username: "olivia_gonzalez_987", commentText: "Stunning photo!" },
	{ username: "lucas_rivera_321", commentText: "Fantastic capture!" },
	{ username: "sofia_cook_456", commentText: "Amazing shot!" },
	{ username: "jayden_morgan_135", commentText: "Great photo!" },
	{ username: "harper_hall_654", commentText: "Well taken!" },
];

// Function to generate random comments for a post
function generateRandomComments() {
	const numComments = Math.floor(Math.random() * comments.length);
	const shuffledComments = comments.sort(() => 0.5 - Math.random());
	return shuffledComments.slice(0, numComments);
}

// Function to generate a random post
function generateRandomPost() {
	const username = generateRandomUsername();
	const avatar = avatarLinks[Math.floor(Math.random() * avatarLinks.length)];
	const postMedia = generateRandomPostMedia();
	const likes = generateRandomPostLikes();
	const description =
		descriptions[Math.floor(Math.random() * descriptions.length)];
	const date = generateRandomPostDate();
	const postComments = generateRandomComments();

	return {
		username,
		avatar,
		postMedia,
		likes,
		description,
		date,
		comments: postComments,
	};
}

// Function to create a new post element
function createPostElement(postData) {
	const postElement = document.createElement("article");
	postElement.className = "post";

	postElement.innerHTML = `
        <div class="post__header">
          <div class="post__profile">
            <a href="#" target="_blank" class="post__avatar">
              <img src="${postData.avatar}" alt="User Picture" />
            </a>
            <a href="#" target="_blank" class="post__user">${
							postData.username
						}</a>
          </div>
          <button class="post__more-options">
            <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>

        <div class="post__content">
          <div class="post__medias">
            <img class="post__media" src="${
							postData.postMedia
						}" alt="Post Content" />
          </div>
        </div>

        <div class="post__footer">
          <div class="post__buttons">
            <button class="post__button">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button class="post__button">
              <i class="fa-regular fa-comment"></i>
            </button>
            <button class="post__button">
              <i class="fa-regular fa-paper-plane"></i>
            </button>
            <div class="post__indicators">
              <button class="post__button">
                <i class="fa-regular fa-bookmark"></i>
              </button>
            </div>
          </div>

          <div class="post__infos">
            <div class="post__likes">
              ${
								postData.likes > 0
									? `<a href="#" class="post__likes-avatar"><img src="${postData.avatar}" alt="User Picture" /></a>`
									: ""
							}
              <span>
                Liked by <a class="post__name--underline" href="#">${
									postData.username
								}</a> and <a href="#">${postData.likes} others</a>
              </span>
            </div>

            <div class="post__description">
              <span>
                <a class="post__name--underline" href="#" target="_blank">${
									postData.username
								}</a>
                ${postData.description}
              </span>
            </div>

            <span class="post__date-time">${postData.date}</span>
          </div>
        </div>

        <!-- Comments -->
        <div class="post__comments">
          ${postData.comments
						.slice(0, 2)
						.map(
							(comment) => `
            <div class="post__comment">
              <a class="post__name--underline" href="#">${comment.username}</a> ${comment.commentText}
            </div>
          `
						)
						.join("")}
          ${
						postData.comments.length > 2
							? `<div class="post__read-more" onclick="toggleComments(this.parentElement, ${
									postData.comments.length - 2
							  })">Read more...</div>`
							: ""
					}
        </div>

        <!-- Comment Text Box -->
        <div class="post__comment-box">
          <input type="text" placeholder="Add a comment..." />
          <button class="post__button post__button--primary">post</button>
        </div>
      `;

	return postElement;
}

// Function to add a new post to the post container
function addNewPost() {
	const newPostData = generateRandomPost();
	const postContainer = document.getElementById("postContainer");
	const postElement = createPostElement(newPostData);
	postContainer.appendChild(postElement);
}

// Generate and add posts
for (let i = 0; i < 25; i++) {
	addNewPost();
}

// Function to add random comments to a post
function addRandomComments(postData, numComments) {
	const availableComments = [...comments];
	const shuffledComments = availableComments.sort(() => 0.5 - Math.random());
	const newComments = shuffledComments.slice(0, numComments);
	postData.comments.push(...newComments);
}

// Function to remove random comments from a post
function removeRandomComments(postData, numComments) {
	postData.comments.splice(-numComments, numComments);
}

// Function to toggle comments visibility
function toggleComments(commentsContainer, additionalComments) {
	const readMore = commentsContainer.querySelector(".post__read-more");

	if (readMore.textContent === "Read more...") {
		readMore.textContent = "Read less...";
		if (additionalComments > 0) {
			addRandomComments(
				commentsContainer.parentElement,
				Math.min(additionalComments, 5)
			);
		}
	} else {
		readMore.textContent = "Read more...";
		if (additionalComments > 0) {
			removeRandomComments(
				commentsContainer.parentElement,
				Math.min(additionalComments, 5)
			);
		}
	}

	const comments = commentsContainer.querySelectorAll(".post__comment");
	comments.forEach((comment, index) => {
		comment.classList.toggle("hidden", index >= 2);
	});
}
