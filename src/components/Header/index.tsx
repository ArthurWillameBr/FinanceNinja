import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                Logo
                
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
        )
}