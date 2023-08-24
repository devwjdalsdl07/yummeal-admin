import styled from "@emotion/styled";

export const ItemContainer = styled.div `
max-width: 1200px;
margin: 0 auto;
`
export const TotalInfoWrap = styled.div`
border: 1px solid;
height: 80px;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
.itemCount {
    margin: 10px 0;
    strong {
        color: skyblue;
        margin: 0 5px;
    }
}
.itemAdd {
    padding: 20px 30px;
    display: block;
    background: #3971ff;
    color: white;
    border-radius: 15px;
}
`

export const SerchFilterWrap = styled.div`

`

export const ItemListWrap = styled.div``