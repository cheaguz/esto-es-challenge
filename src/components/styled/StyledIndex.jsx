import { styled } from "@mui/system";


export const StyledContainer = styled('div')( (props) => (`
    display: flex;
    justify-content: center;
    padding: 2%;
    width : ${props.width};
    background-color : ${props.background};
    @media (max-width: 900px) {
        padding : 40px 0% 0% 0%;
    }
`) ) 

export const StyledLabel = styled('label')({
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '22px'
});

export const StyledDivError = styled('div')({
    height: '20px'
})

export const SubHeader = styled('div')(({content}) => (
    {
        boxShadow: 'inset 0px -1px 0px #D9D9D9',
        display: 'flex',
        justifyContent: `${content || 'space-between'}`,
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
))

export const RedButton = styled('button')( (props)=>((`
    margin-right: 19px;
    margin-top:${props.top || '0px'};
    margin-bottom : ${props.bottom || '0px' } ;
    width: 134px;
    height: 40px;
    background-color: #F5222D;
    color: #FFFFFF;
    border-radius: 4px;
    border:none;
    cursor : pointer;
    font-size : 16px;
    &:hover {
        transition:all .3s ease-in-out;
        filter: opacity(.9);
    }
`
    
)))

export const StyledForm = styled('form')({
    padding: '3%',
    paddingBottom: '1%',
    width: '664px',
    height: '40%',
    alignItems: 'center',
    background: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: '4px',
})


export const StyledGrid = styled('div')( (props) => (`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    font-weight: ${props.fontWeight || '500'};
    background: ${props.background || 'rgba(0, 0, 0, 0.02)' };
    box-shadow: inset 0px -1px 0px #D9D9D9;
    justify-content: space-around;
    align-items: center;
    padding: 1%;
    height:40px;
    font-size: ${props.fontSize || '16px'};
    @media (max-width: 900px) {
        display : none;  
    }
`)
)

export const StyledCard = styled('div')`
    width : 100%;
    background-color : #fff;
    box-shadow: inset 0px -1px 0px #D9D9D9;
    display : flex;
    justify-content : space-between;
    align-items : center;
    height : 120px;
`

export const CardGrid = styled('div')`
    padding : 2%;
    line-height: 14%;
    color : rgba(0, 0, 0, 0.65);
    font-style: normal;
    font-weight: 400;
    
`
