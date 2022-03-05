import styled from "styled-components";

const HorizontalView = styled.div`
    aspect-ratio: 100/37;
    width: 80%;
    background-color: #81c784;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;;
    justify-content: space-between;
    display: flex;
`;

const Endzone = styled.div`
    aspect-ratio: 18/37;
    height: 100%;
    background-color: #03a9f4;
`;

function Field() {
    return (
        <HorizontalView>
            <Endzone />
            <Endzone />
        </HorizontalView>
    )
}

export default Field;