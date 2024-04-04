import PropTypes from 'prop-types';
import { Card, CardContent, styled } from '@mui/material';
import Constants from '../../Utils/constants';
import { useEffect } from 'react';

const StyledCard = styled(Card)({
    backgroundColor: Constants.CARD_BACKGROUND_COLOR,
    width: '50%',
    margin: 1,
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
});

const DoubleCards = ({
    picked = [],
    list,
    setList,
    onStop,
}) => {


    const handleClick = (item, index) => {
        const card = document.getElementById(`card-${item.id}`);
        if (card) {
            card.style.transition = 'transform 1s ease'; 
            card.style.transform = index !== 0 ? 'translateX(2000px) rotate(180deg)' : 'translateX(-2000px) rotate(-180deg)'; 
        }
        const notSelectedItem = {...picked.filter((item, i) => i !== index)};
        const notSelectedCard = document.getElementById(`card-${notSelectedItem[0].id}`);
        if (notSelectedCard) {
            notSelectedCard.style.transition = 'transform 1s ease'; 
            notSelectedCard.style.transform = "translateY(2000px)";
        }
        setList(list.filter((item) => item.id !== notSelectedItem[0].id));
        setTimeout(() => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = 'none';
            notSelectedCard.style.transition = 'transform 0.5s ease';
            notSelectedCard.style.transform = "none"
        }, 500);
    }

    useEffect(() => {
        if (list.length <= 3) {
            onStop();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);


    return (
        <div
            style={{
                display: "flex",
                justifyContent: 'center',
                marginTop: 15,
                maxHeight: 500,
                height: '100%',
            }}
        >
            {picked.map((item, index) => {
                return (
                    <StyledCard
                        id={`card-${item.id}`}
                        key={index}
                        sx={{
                            transition: 'all 0.5s ease',
                            ":hover": {
                                transform: index === 0 ? 'rotate(-5deg)' : 'rotate(5deg)',
                                transition: 'all 0.5s ease',
                                opacity: 0.5,
                            }
                        }}
                        onClick={() => {
                            handleClick(item, index)
                        }}
                    >
                        <CardContent sx={{ width: '100%', height: '100%', marginTop: 1 }}>
                            <img
                                src={item.url}
                                alt="img"
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </CardContent>
                    </StyledCard>
                );
            })}
        </div>
    )
}

DoubleCards.propTypes = {
    picked: PropTypes.array,
    list: PropTypes.array,
    setList: PropTypes.func,
    onStop: PropTypes.func,
}

export default DoubleCards