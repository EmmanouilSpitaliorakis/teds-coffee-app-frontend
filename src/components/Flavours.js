export const Flavours = ({isEspresso, pct}) => {
    
    const flavours = (isEspresso, pct) => {
        if (isEspresso){
            switch (pct){
                case 100:
                    return ("🍋🌿")
                break;
                case 90:
                    return ("🍋🍏")
                break;
                case 80:
                    return ("🍋🍎🍓🍫")
                break;
                case 70:
                    return ("🍭🍫🍍🍋🍓🌸")
                break;
                case 60:
                    return ("🍭🍫🍋🌸")
                break;
                case 50:
                    return ("🍫🍍🍭")
                break;
                case 40:
                    return ("🍫🍯🍷")
                break;
                case 30:
                    return ("🍫🍷🍬")
                break;
                case 20:
                    return ("🍫🥜🥃")
                break;
                case 10:
                    return ("🍫🥃")
                break;
                case 0:
                    return ("🍫🍬")
                break;
            }
        }else{
            switch (pct){
                case 100:
                    return ("🍋🍯")
                break;
                case 90:
                    return ("🍏🍯")
                break;
                case 80:
                    return ("🍐🍏🍯")
                break;
                case 70:
                    return ("🍭🍐🍏🍯")
                break;
                case 60:
                    return ("🍊🍎🍍🍯")
                break;
                case 50:
                    return ("🍫🍬🍎🍍")
                break;
                case 40:
                    return ("🍫🍬🥭🍓🍍🍒")
                break;
                case 30:
                    return ("🍫🍓🍒🍍")
                break;
                case 20:
                    return ("🍫🍷🍬")
                break;
                case 10:
                    return ("🍫🥃🍬")
                break;
                case 0:
                    return ("🍫🍬")
                break;
            }
        }

    }
    return (
        <div>
            {flavours(isEspresso, pct)}
        </div>
    )
    }
