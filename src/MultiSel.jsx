
import { useState } from "react";

import { Modal, Placeholder, List, Input } from "@telegram-apps/telegram-ui";
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {Multiselect} from "@telegram-apps/telegram-ui";


export default function MultiSel() {
    const options = [
        { value: 1, label: "option 1" },
        { value: 2, label: "option 2" },
        { value: 3, label: "option 3" },
      ];

      const [selectedValues, setSelectedValues] = useState([]);
      const [isOpened, setIsOpened] = useState(false);
 

      const handleChange = (selected) => {
          setSelectedValues(selected);
          console.log('Select', selected);
      };


    
    return (
        <Modal
      
            open={true}
            modal={true}
        >
            <DialogPrimitive.Title></DialogPrimitive.Title>
            <DialogPrimitive.Content></DialogPrimitive.Content>
            <DialogPrimitive.Description></DialogPrimitive.Description>
            <Multiselect
                options={options}
                value={selectedValues}
                onChange={handleChange}
                placeholder="Select"
                />
            <Input key="nameInput" header="Name"></Input>
            <Input key="priceInput" header="Price"></Input>
            <Input header="Description"></Input>
     
    </Modal>
    )
}

   
       