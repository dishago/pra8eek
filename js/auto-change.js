const featureImages = [
    ["../images2/guitar1.jpeg", "../images2/guitar2.jpeg", "../images/guitar3.jpeg"],
    ["../image2/food1.jpeg", "../images2/food2.jpeg", "../images2/food3.jpeg"],
    ["../images/fool1.jpeg", "../images2/fool2.jpeg", "../images2/fool3.jpeg"],
    ["images/dog1.jpeg", "images/dog2.jpeg", "images/dog3.jpeg"],
    ["images/cards1.jpeg", "images/cards2.jpeg", "images/cards3.jpeg"],
    ["images/fracture1.jpeg", "images/fracture2.jpeg", "images/fracture3.jpeg"],
    ["images/travel1.jpeg", "images/travel2.jpeg", "images/travel3.jpeg"],
    ["images/swag1.jpeg", "images/swag2.jpeg", "images/swag3.jpeg"]
  ];

  const featureBoxes = document.getElementById("features");

  featureImages.forEach((images, index) => {
    const col = document.createElement("div");
    col.classList.add("col-lg-3", "col-md-6");

    const box = document.createElement("div");
    box.classList.add("box");

    const imgBox = document.createElement("div");
    imgBox.classList.add("img-box");

    const img = document.createElement("img");
    img.src = images[0];
    imgBox.appendChild(img);

    const detailBox = document.createElement("div");
    detailBox.classList.add("detail-box");

    const heading = document.createElement("h5");
    heading.textContent = "Feature " + (index + 1);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Description of feature " + (index + 1);

    detailBox.appendChild(heading);
    detailBox.appendChild(paragraph);

    box.appendChild(imgBox);
    box.appendChild(detailBox);

    col.appendChild(box);
    featureBoxes.appendChild(col);

    let imageIndex = 0;
    setInterval(() => {
      img.src = images[imageIndex];
      imageIndex = (imageIndex + 1) % images.length;
    }, 1000);
  });