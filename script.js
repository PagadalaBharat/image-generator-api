var input = document.getElementsByTagName("input")[0];
      var button = document.getElementsByTagName("button")[0];
      var images = document.getElementById("images");
    //   console.log(input, button, images);
      let pages = 1;

      async function getdata(valdata) {
        const apidata = await fetch(
          `https://api.unsplash.com/search/photos?page=${pages}&per_page=12&query=${valdata}&client_id=11NB-2CdDlqfcINbWQvXyeXWjmBGZhMqStbno70E9F4`

        );
        const data = await apidata.json();
        console.log(data);
        if (pages === 1) {
          images.innerHTML = "";
        }
        var imagesdata = data.results.map((result) => {
          var results = result.urls.small;
          // console.log(results)
          var img = document.createElement("img");
          console.log(img);
          img.src = results;

          images.append(img);
        });

        // console.log(data.results[0].urls.small)
      }
      button.addEventListener("click", () => {
        var val = input.value;
        // console.log(val)
        getdata(val);
      });