let listings = document.querySelectorAll(".a-row.a-size-small");

let product = document.getElementById("averageCustomerReviews");


if (listings.length > 1) {
    listings.forEach(function (listing) {
        let starCount = listing.children[0].ariaLabel;
        let reviewerCount = listing.children[1].ariaLabel;

        let parsedStarCount = starCount.substring(0, 3);

        let parsedReviewerCount = reviewerCount;
        parsedReviewerCount = parseInt(parsedReviewerCount.replaceAll(',', ''));

        let percentage = (((parsedStarCount / 5) * parsedReviewerCount) + 1) / (parsedReviewerCount + 2) * 100;

        percentage = '😄 ? : ' + percentage.toFixed(1) + '%';
        let node = document.createElement('span');
        node.innerHTML = percentage;
        node.style.border = "1px solid #5A5A5A";
        listing.appendChild(node);
    });
}


let starCount = document.querySelector("#acrPopover > span.a-declarative > a > span").innerHTML;
let reviewerCount = document.querySelector("#acrCustomerReviewText").innerHTML;

let parsedReviewerCount = reviewerCount;
parsedReviewerCount = parsedReviewerCount.replaceAll(',', '');
parsedReviewerCount = parsedReviewerCount.replaceAll(' ratings', '');

let productInfo = (((starCount / 5) * parseInt(parsedReviewerCount)) + 1) / (parseInt(parsedReviewerCount) + 2) * 100;

productInfo = '😄 ? : ' + productInfo.toFixed(1) + '%';

let productNode = document.createElement('span');
productNode.innerHTML = productInfo;
productNode.style.border = "1px solid #5A5A5A";
product.appendChild(productNode);