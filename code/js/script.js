// JavaScript

const productData = [
	{
	  name: "Reebok Men Energen Lite",
	  image: "reebok men energon lite.jpg",
	  link: "product1.html",
	  description: "Lace up shoes, upto Ankle Height. Fit for all Generations Young and Old!ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
	  tags: ["reebok men energen Lite", "reebok", "shoes", "shoe",   "sports", "sports shoes", "sport shoes", "sport shoes",  "sport shoe", "lace up shoes","lace-up shoes","lace", "laceup", "lace-up", "foot", "footwear", "reeb", "reeb", "ree", "reebo", "men", "mens", "men's", "running", "jogging", "energen", "energon", "lite", "leg"],
	},
	{
	  name: "Puma Men Supernova IDP Running Shoes",
	  image: "puma shoe.jpg",
	  link: "product2.html",
	  description: "Lace-up with a Regular fit. Good fit for Running and Jogging ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
	  tags: ["puma men supernova idp running shoes", "puma", "puma shoes",  "sports", "sports shoes", "sport shoes", "sport shoes",  "sport shoe", "puma running shoes",  "running shoes", "shoes", "shoe", "lace", "laceup", "lace up shoes", "lace-up shoes","lace-up", "foot", "footwear", "men", "mens", "men's", "running", "jogging", "leg", "supernova", "idp"],
	},
	{
		name: "Adidas Mens Acme M Sneaker",
		image: "adidad.jpg",
		link: "product3.html",
		description: "Lace-up with a Medium Fit. Stylish Sneakers for Everyday Life  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["adidas mens acme m sneaker", "adidas", "adidas sneakers", "adidas shoes",  "sports", "sports shoes", "sport shoes", "sport shoes",  "sport shoe", "shoes", "shoe", "foot", "footwear", "men", "mens", "men's","running", "jogging", "leg", "acme", "sneaker", "sneakers"],
	},
	{
		name: "Titan Karishma - M",
		image: "titan karishma-m.jpg",
		link: "product4.html",
		description: "Black Dial, Round Case, Color: Silver, Stainless Steel Band ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["titan karishma m", "titan karishma", "titan", "watch", "karishma", "black dial", "dial", "clock", "time", "watches", "steel", "men", "mens", "men's", "silver", "Stainless Steel Band", "Steel Band", "Band", "electronics", "electric"],
	},
	{
		name: "Titan Karishma W",
		image: "titan women.jpg",
		link: "product5.html",
		description: "Champagne Dial, Round Case, Color: Golden, Brass Alloy Band ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["titan karishma w", "titan karishma", "titan", "watch", "karishma", "champagne dial", "dial", "clock", "time", "watches", "steel", "women", "womens", "women's", "gold", "golden", "Stainless Steel Band", "Steel Band", "Band", "electronics", "electric"],
	},
	{
		name: "Redmi Smart TV",
		image: "redmi tv.png",
		link: "product6.html",
		description: "80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["redmi smart tv", "smart tv", "smart t.v.", "redmi", "tv", "android", "television", "t.v.", "electronics", "electric", "smart"],
	},
	{
		name: "Samsung Smart TV",
		image: "samsung tv.jpg",
		link: "product7.html",
		description: "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["samsung smart tv", "smart tv", "smart t.v.", "samsung", "smart", "tv", "t.v.", "television", "channel", "tvs",  "televisions", "electronics", "electric"],
	},
	{
		name: "Hisense Mini Refrigerator",
		image: "hisense mini fridge.jpg",
		link: "product8.html",
		description: "46 L 2 Star Direct-Cool Single Door Mini Refrigerator (RR46D4SSN, Silver, 2022 Model)ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["hisense mini refrigerator", "mini refrigerator", "mini fridge","hisense mini refrigerator","hisense", "mini", "refrigerator", "refridgerator", "fridge", "refrigerators", "refridgerators", "fridges", "cool", "cold", "ice", "electronics", "electric"],
	},
	{
		name: "Samsung DD Refrigerator",
		image: "samsung fridge.png",
		link: "product9.html",
		description: "845 Litres Frost Free Double Door Refrigerator with Multi Flow System (RS82A6000B1/TL, Black Matt (Doi))",
		tags: ["samsung dd refrigerator", "samsung", "refrigerator", "samsung refrigerator", "samsung dd refrigerator","refridgerator", "fridge", "cool", "cold", "ice", "double door", "black matt", "black", "frost", "electronics", "electric"],
	},
	{
		name: "MSI GF66 Laptop",
		image: "msi katana.jpg",
		link: "product10.html",
		description: "Thin, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (16GB/512GB SSD/Windows 11/Nvidia RTX3050Ti 4GB GDDR6/Black/2.25Kg)",
		tags: ["msi gf66 laptop", "msi", "gf66", "msi gf66", "laptop", "computer", "portable computer", "intel", "i5", "12 gen", "12th gen", "12th generation", "game", "gaming", "electronics", "electric"],
	},
	{
		name: "ASUS Vivobook Pro 16",
		image: "asus laptop.jpg",
		link: "product11.html",
		description: "Intel Core i9 11th Gen, 16inch (40.64 cm) FHD+ 120Hz, Thin & Light Laptop (16GB/512GB SSD/4GB RTX 3050)",
		tags: ["asus vivobook pro 16", "asus", "vivobook", "asus vivobook", "laptop", "computer", "portable computer", "intel", "i5", "12 gen", "12th gen", "12th generation", "game", "gaming", "electronics", "electric"],
	},
	{
		name: "Morphy Richards Coffee Maker",
		image: "coffeemaker.jpg",
		link: "product12.html",
		description: "600-Watt 6-cup Drip Coffee Maker, Gloss Black, Regular (350012) ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["coffee", "coffeemaker", "morphy", "richards", "morphy richards", "morphy coffeemaker", "morphy richards coffeemaker", "electronics", "electric"],
	},
	{
		name: "Redmi Note 11T 5G",
		image: "redmi note 11t.jpg",
		link: "product13.html",
		description: "Stardust White, 8GB RAM, 128GB ROM | Dimensity 810 5G | 33W Pro Fast Charging | Charger ㅤㅤIncluded ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["redmi note 11t 5g", "Stardust White", "redmi", "redmi note 11t 5g", "5g", "redmi note", "phone", "11t", "redmi note 11t", "smartphone", "electronics", "electric", "mobile", "mobile phone"],
	},
	{
		name: "Samsung Galaxy S23 Ultra",
		image: "samsung galaxy.jpg",
		link: "product14.html",
		description: "Green, 12GB RAM, 256GB ROM | Android 13.0 | 5G | 33W Pro Fast Charging | Charger Included ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["samsung", "samsung phone", "samsung smartphone", "samsung galaxy s23 ultra", "galaxy", "s23", "ultra", "samsung galaxy", "smartphone", "android", "phone", "electronics", "electric", "mobile", "mobile phone"],
	},
	{
		name: "Voltas Air Conditioner",
		image: "voltas ac.jpg",
		link: "product15.html",
		description: "1.4 Ton 3 Star Inverter Split AC (Copper, Model 2023, 173V Vectra Platina, White) ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["voltas air conditioner", "ac", "a.c.", "air conditioner", "vectra platina", "voltas a.c.", "voltas ac", "electronics", "electric"],
	},
	{
		name: "Women's Kanjivaram Saree",
		image: "saree.jpg",
		link: "product16.html",
		description: "Kanjivaram Soft Silk Saree With Blouse Piece ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["women's", "women's kanjivaram saree", "women", "women's saree", "women saree", "blouse", "silk", "apparel", "clothes", "cloth", "saree"],
	},
	{
		name: "Allen Solly Men's Shirt",
		image: "shirtt.jpg",
		link: "product17.html",
		description: "Fit Type: Regular Fit. Men's Green Shirt ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["allen solly men's shirt", "men", "men's", "man", "shirt", "green", "regular Fit", "apparel", "clothes", "cloth"],
	},
	{
		name: "SERVO Engine Oil",
		image: "oil.jpg",
		link: "product18.html",
		description: "Super 20w40 multi grade engine oil (4 Stroke) - 1ltr for Car ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
		tags: ["servo engine oil", "multi grade engine oil", "servo", "engine oil", "indian oil", "super 20w40 multi grade engine oil", "car oil"],
	},

	  
  ];
  
  const searchParams = new URLSearchParams(window.location.search);
  const searchText = searchParams.get('search').toLowerCase();
  const searchButton = document.getElementById("search-button");
  const searchResultsContainer = document.getElementById("search-results");
  const searchWords = searchText.split(" ");
  var counter = 0;
  var check = 0;
  var spacechk = 0;
  
 
  
  productData.forEach(function(tags) {
	const keywords = [];
	tags.tags.forEach((tag) => {
	keywords.push(tag);
	//const wordsToAdd = tag.split(" ");
	//keywords.push(...wordsToAdd)
	});
	counter++;
	if (hasCommonWord(keywords, searchWords)) {
		const productCard = createProductCard(tags);
		searchResultsContainer.appendChild(productCard);
		spacechk++;
	}
	else {
		check++;
		
	  }
	if(spacechk>0){
	 if(spacechk%3==0){
		const Divspace = document.createElement("div");
		Divspace.classList.add("div-space");
		searchResultsContainer.appendChild(Divspace);
	}}
	 
});
  if(counter ==check){
	const noResultsMessage = document.createElement("p");
		noResultsMessage.textContent = "No results found";
		noResultsMessage.classList.add("no_result");
		searchResultsContainer.appendChild(noResultsMessage);
  };

   
  // Create a product card for a given product object
  function createProductCard(product) {
	const productCard = document.createElement("div");
	productCard.classList.add("single-box1");
    
	const productImgdiv = document.createElement("div");
	productImgdiv.classList.add("img2");
	const productImage = document.createElement("img");
	productImage.classList.add("product-card-img");
	productImage.src = product.image;
	productImage.alt = product.name;
	productImgdiv.appendChild(productImage);
  
	const productName = document.createElement("h3");
	productName.classList.add("product-name");
	productName.textContent = product.name;
  
	const productDescription = document.createElement("p");
	productDescription.classList.add("product-description");
	productDescription.textContent = product.description;

	const productLink = document.createElement("a");
	productLink.href = product.link;
  
	productLink.appendChild(productImgdiv);
	productLink.appendChild(productName);
	productLink.appendChild(productDescription);
	productCard.appendChild(productLink);
  
	return productCard;
  }
  
  function hasCommonWord(list1, list2) {
	// Iterate over each word in list1
	for (let word1 of list1) {
	  // Iterate over each word in list2
	  for (let word2 of list2) {
	   if (areWordsEquivalent(word1, word2)) {
		return true;		
	   }
	   else if ((word1.length==word2.length || word1.length==word2.length-1 || word1.length==word2.length+1) && word2.length>1) 	
	   {
		// Check if the words have up to 1 character error for small words
		if (word1.length <= 5 && word2.length <= 5 && isWithinOneError(word1, word2)) {
			//const test = document.createElement("p");
		    //test.textContent = word1;
		    //searchResultsContainer.appendChild(test);
			return true;		  
		}

		// Check if the words have up to 2 character errors for medium words
		if (word1.length > 5 && word1.length <= 7 && word2.length >5 && word2.length <= 7 && isWithinTwoErrors(word1, word2)) {
			return true;
		  
		}

		// Check if the words have up to 3 character errors for large words
		if (word1.length > 7 && word2.length > 7 && isWithinThreeErrors(word1, word2)) {
		  return true;
		}
		}
	  }
	}
	
	// No common word found
	return false;
  }
  
  // Helper function to check if two words have up to 1 character error
  function isWithinOneError(word1, word2) {
	let errorCount = 0;
	
	// Compare each character of the words
	for (let i = 0; i < word1.length; i++) {
	  if (word1[i] !== word2[i]) {
		errorCount++;
		
		// Return false if the error count exceeds 1
		if (errorCount > 1) {
		  return false;
		}
	  }
	}
	
	return true;
  }
  
  // Helper function to check if two words have up to 1 character error
  function isWithinTwoErrors(word1, word2) {
	let errorCount = 0;
	
	// Compare each character of the words
	for (let i = 0; i < word1.length; i++) {
	  if (word1[i] !== word2[i]) {
		errorCount++;
		
		// Return false if the error count exceeds 2
		if (errorCount > 2) {
		  return false;
		}
	  }
	}
	
	return true;
  }

  // Helper function to check if two words have up to 3 character errors
  function isWithinThreeErrors(word1, word2) {
	let errorCount = 0;
	
	// Compare each character of the words
	for (let i = 0; i < word1.length; i++) {
	  if (word1[i] !== word2[i]) {
		errorCount++;
		
		// Return false if the error count exceeds 3
		if (errorCount > 3) {
		  return false;
		}
	  }
	}
	
	return true;
  }  

  function areWordsEquivalent(word1, word2) {
  if (word1 === word2) {
    return true;
  }

  if (word1.length !== word2.length) {
    return false;
  }

  const n = word1.length;
  let diffCount = 0;

  for (let i = 0; i < n; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
      if (diffCount > 2 || word1[i + 1] !== word2[i] || word1[i] !== word2[i + 1]) {
        return false;
      }
      i++; // Skip the next iteration as we have already checked the adjacent characters
    }
  }

  return true;
}
