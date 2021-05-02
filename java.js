let body = document.getElementById(1);
        let szam = -0;

        for (n = 0; n <= 19; n++) {
            let row = document.createElement("tr");
            let col1 = document.createElement("td");
            szam++;
            let col2 = document.createElement("td");
            body.appendChild(row);
            col1.textContent = szam + "!";
            row.appendChild(col1);
            col2.textContent = fac(n);
            row.appendChild(col2);

            function fac(n) {
                return (n < 2) ? 1 : fac(n - 1) * n;
            }
        }