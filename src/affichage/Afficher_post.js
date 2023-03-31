import { ImageList ,ImageListItem} from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import"./style/afficher_post.css"


function Afficher_post(){
   const [image,setimage]=useState(["https:\/\/images.dog.ceo\/breeds\/frise-bichon\/jh-ezio-2.jpg","https:\/\/images.dog.ceo\/breeds\/tervuren\/shadow_and_frisbee.jpg","https:\/\/images.dog.ceo\/breeds\/dhole\/n02115913_4336.jpg","https:\/\/images.dog.ceo\/breeds\/malamute\/n02110063_16696.jpg","https:\/\/images.dog.ceo\/breeds\/ridgeback-rhodesian\/n02087394_7254.jpg","https:\/\/images.dog.ceo\/breeds\/dalmatian\/cooper2.jpg","https:\/\/images.dog.ceo\/breeds\/springer-english\/n02102040_6566.jpg","https:\/\/images.dog.ceo\/breeds\/hound-ibizan\/n02091244_1541.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-american\/n02093428_16887.jpg","https:\/\/images.dog.ceo\/breeds\/finnish-lapphund\/mochilamvan.jpg","https:\/\/images.dog.ceo\/breeds\/bouvier\/n02106382_4504.jpg","https:\/\/images.dog.ceo\/breeds\/spitz-japanese\/tofu.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-silky\/n02097658_552.jpg","https:\/\/images.dog.ceo\/breeds\/chihuahua\/n02085620_9414.jpg","https:\/\/images.dog.ceo\/breeds\/whippet\/n02091134_15210.jpg","https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_6701.jpg","https:\/\/images.dog.ceo\/breeds\/leonberg\/n02111129_976.jpg","https:\/\/images.dog.ceo\/breeds\/germanshepherd\/n02106662_25775.jpg","https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_4782.jpg","https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_1.jpg","https:\/\/images.dog.ceo\/breeds\/buhund-norwegian\/hakon2.jpg","https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_11888.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-fox\/n02095314_2964.jpg","https:\/\/images.dog.ceo\/breeds\/labradoodle\/Cali.jpg","https:\/\/images.dog.ceo\/breeds\/poodle-toy\/n02113624_1832.jpg","https:\/\/images.dog.ceo\/breeds\/spaniel-cocker\/n02102318_9670.jpg","https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_3866.jpg","https:\/\/images.dog.ceo\/breeds\/dachshund\/Daschund_Wirehair.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-american\/n02093428_7689.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-english\/bunz.jpg","https:\/\/images.dog.ceo\/breeds\/lhasa\/n02098413_1471.jpg","https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_9969.jpg","https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_3474.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-border\/n02093754_4730.jpg","https:\/\/images.dog.ceo\/breeds\/poodle-medium\/WhatsApp_Image_2022-08-06_at_4.48.38_PM.jpg","https:\/\/images.dog.ceo\/breeds\/redbone\/n02090379_4381.jpg","https:\/\/images.dog.ceo\/breeds\/poodle-miniature\/n02113712_7710.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-tibetan\/n02108551_4751.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-dandie\/n02096437_612.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-bull\/n02108422_2111.jpg","https:\/\/images.dog.ceo\/breeds\/airedale\/n02096051_1017.jpg","https:\/\/images.dog.ceo\/breeds\/bluetick\/n02088632_686.jpg","https:\/\/images.dog.ceo\/breeds\/australian-shepherd\/leroy.jpg","https:\/\/images.dog.ceo\/breeds\/malinois\/n02105162_5927.jpg","https:\/\/images.dog.ceo\/breeds\/coonhound\/n02089078_1951.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-westhighland\/n02098286_4445.jpg","https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_3709.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-toy\/n02087046_5499.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-english\/jager-2.jpg","https:\/\/images.dog.ceo\/breeds\/setter-gordon\/n02101006_1637.jpg"])


    return(
        <div id="afficher_post">
            <div id="recherche_afficher_post">
              <input type="text" id="input_recherche_post" placeholder="recherche"/>
            </div>
            <div id="tous_post">
          <ImageList  variant="masonry" cols={3} gap={8}>
              {image.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                          src={`${item}?w=161&fit=crop&auto=format`}
                          srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                           loading="lazy"
                         />
                   </ImageListItem>
                ))}
              </ImageList>
            </div>
        </div>
    )
}
export default Afficher_post