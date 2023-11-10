function change() {
                         let a = document.getElementById('se1').value;
                         let b = document.getElementsByTagName('input')[0].value;
                         let c = document.getElementById('se2').value;
                         let d;

                         if (a == 'fah1') {
                                                  if (c == 'fah2') { d = b; }
                                                  else if (c == 'cel2') {

                                                                           d = (b - 32) * 5 / 9;

                                                  }
                                                  else {
                                                                           d = (b - 32) * 5 / 9;
                                                                           d = parseInt(d);
                                                                           d += 273.15;
                                                  }
                         }
                         else if (a == 'kel1') {
                                                  if (c == 'kel2') d = b;
                                                  else if (c == 'cel2') {
                                                                           d = parseInt(b);
                                                                           // console.log(c);
                                                                           d -= 273.15;
                                                  }
                                                  else {
                                                                           d = parseInt(b);
                                                                           // console.log(c);
                                                                           d -= 273.15;
                                                                           d = (9 / 5) * d + 32;
                                                  }

                         }
                         else {
                                                  if (c == 'cel2') d = b;
                                                  else if (c == 'fah2') {
                                                                           d = (9 / 5) * b + 32;
                                                  }
                                                  else {
                                                                           d = parseInt(b);
                                                                           d += 273.15;
                                                  }
                         }
                         document.getElementsByTagName('input')[1].value = d; }