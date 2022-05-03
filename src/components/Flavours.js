export const Flavours = ({isEspresso, pct}) => {
    
    const flavours = (isEspresso, pct) => {
        if (isEspresso){
            switch (pct){
                case 100:
                    return ("🍋🌿");
                case 90:
                    return ("🍋🍏");
                case 80:
                    return ("🍋🍎🍓🍫");
                case 70:
                    return ("🍭🍫🍍🍋🍓🌸");
                case 60:
                    return ("🍭🍫🍋🌸");
                case 50:
                    return ("🍫🍍🍭");
                case 40:
                    return ("🍫🍯🍷");
                case 30:
                    return ("🍫🍷🍬");
                case 20:
                    return ("🍫🥜🥃");
                case 10:
                    return ("🍫🥃");
                case 0:
                    return ("🍫🍬");
                default:
                    return("🍋🌿")
            }
        }else{
            switch (pct){
                case 100:
                    return ("🍋🍯");
                case 90:
                    return ("🍏🍯");
                case 80:
                    return ("🍐🍏🍯");
                case 70:
                    return ("🍭🍐🍏🍯");
                case 60:
                    return ("🍊🍎🍍🍯");
                case 50:
                    return ("🍫🍬🍎🍍");
                case 40:
                    return ("🍫🍬🥭🍓🍍🍒");
                case 30:
                    return ("🍫🍓🍒🍍");
                case 20:
                    return ("🍫🍷🍬");
                case 10:
                    return ("🍫🥃🍬");
                case 0:
                    return ("🍫🍬");
                default:
                    return("🍋🍯")
            }
        }

    }
    return (
        <div>
            {flavours(isEspresso, pct)}
        </div>
    )
    }
