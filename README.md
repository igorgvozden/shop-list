da bi pokrenuli aplikaciju iz docker kontejnera:

1) Otvori terminal u folderu projekta
2) u terminalu ukucaj > docker build .
3) nakon zavrsenog build procesa, terminal ce napisati IMAGE_ID    // writing image sha256: IMAGE_ID
4) u istom terminalu ukucaj > docker run -p 3000:80 IMAGE_ID      // ovo ce da publishuje kontejner na localhost port 3000

5) u novom terminalu u istom folderu ukucaj > docker ps -a        // pokrece sve procese u kontejneru
6) ovde postoji ime kontejnera koje je automatski generisano i koji "is running"

7) da zaustavis procese u kontejneru u terminalu kucaj > docker stop IME_KONTEJNERA

