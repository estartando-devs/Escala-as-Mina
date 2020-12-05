import { Card, ListItem, Typography, Button } from "../../components";
import * as M from "../../mocks";
import { useTheme } from "styled-components";
import { getV } from "../../styles";
import { useState } from "react";
import * as S from "./styledPage";
import deletar from "../../assets/icons/Deletar.svg";
import upload from "../../assets/icons/Upload.svg";

export const Dashboard = (props) => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(false);

  const [totalPages, matches] = M.getItems(page);
  const missingMatches = M.getMissingMatches();
  const currentRound = M.getCurrentRound();
  const totalMatches = M.getTotalMatches();
  const bestAthlete = M.getAthlete("best");
  const bestTeam = M.getTeam("best");
  const totalTeams = M.getTotalTeams("0");
  const lastTotalTeams = M.getTotalTeams("-1");

  const matchesChecked = checkTeamsNameLenght(matches);
  const isntFirstPage = page !== 0;
  const instLastPage = page !== totalPages;
  const theresPagesLeft = page - 1 > 1;
  const theresPagesRight = page + 1 < totalPages - 1;

  return (
    <S.GlobalWrapper>
      <Modal show={show} setShow={setShow} roundsInfo={[1, 1, 1, 1, 1]} />
      <S.Header>
        <Typography type="h1" align="left">
          Dashboard
        </Typography>
      </S.Header>
      <S.GridWrapper>
        <Card size="normal" direction="column" area="a" flex>
          <S.FlexContainer
            width="639px"
            marginBottom="32px"
            justify="space-between"
          >
            <Typography type="h2" align="left">
              {currentRound}ª Rodada
            </Typography>
            <Button
              size="small"
              height="24px"
              variation="active"
              color={theme.pallete.gray.white}
              onClick={() => setShow(true)}
            >
              Gerenciar Rodada
            </Button>
          </S.FlexContainer>
          <ul>
            {matchesChecked.map((item, index) => (
              <ListItem key={("partida", index)} type="dashboard">
                {item}
              </ListItem>
            ))}
          </ul>
          <S.GridColumnWrapper column="2fr 1fr 2fr">
            <>
              {isntFirstPage && (
                <S.FlexContainer>
                  <Button type="icon" onClick={() => setPage(page - 1)}>
                    {"<"}
                  </Button>
                  <Button type="icon" onClick={() => setPage(0)}>
                    Primeira Página
                  </Button>
                  {theresPagesLeft && <p>...</p>}
                </S.FlexContainer>
              )}
              {/* //I have to
                return an empty div or else the buttons go to the wrowng column
                in grid-template-columns */}
              {!isntFirstPage && !theresPagesLeft && <div></div>}
            </>
            {/* this gets all numbered buttons */}
            <S.FlexContainer>
              {getButtons(page, totalPages, theme, setPage)}
            </S.FlexContainer>
            <S.FlexContainer>
              {theresPagesRight && <p>...</p>}
              {instLastPage && (
                <>
                  <Button type="icon" onClick={() => setPage(totalPages)}>
                    Última Página
                  </Button>
                  <Button type="icon" onClick={() => setPage(page + 1)}>
                    {">"}
                  </Button>
                </>
              )}
            </S.FlexContainer>
          </S.GridColumnWrapper>
        </Card>

        <Card flex direction="column" justify="flex-start" area="b">
          <Typography size={getV("24px", "w")} type="h2">
            Jogadoras Avaliadas
          </Typography>
          <S.FlexContainer direction="column">
            <Typography
              align="center"
              color={theme.pallete.alert.main}
              size="32px"
            >
              {missingMatches}/{totalMatches}
            </Typography>
            <Typography
              color={theme.pallete.alert.lighter}
              size={getV("32px", "w")}
              align="center"
            >
              {((missingMatches / totalMatches) * 100).toFixed(1)}%
            </Typography>
          </S.FlexContainer>
        </Card>

        <Card flex direction="column" justify="flex-start" area="c">
          <Typography size={getV("24px", "w")} type="h2">
            Clubes com avaliações pendentes
          </Typography>
          <S.FlexContainer direction="column">
            <Typography
              color={theme.pallete.gray.thirdGray}
              weight="700"
              size={getV("32px", "w")}
              align="center"
            >
              {missingMatches * 2}
            </Typography>
          </S.FlexContainer>
        </Card>
        <Card flex direction="column" justify="flex-start" area="d">
          <Typography size={getV("24px", "w")} type="h2">
            Melhor Jogadora da Rodada
          </Typography>
          <S.FlexContainer direction="column">
            <Typography
              color={theme.pallete.alert.main}
              weight="700"
              size={getV("24px", "w")}
              align="center"
            >
              {bestAthlete.name}
            </Typography>
            <Typography
              weight="700"
              size={getV("24px", "w")}
              align="center"
              gradient
            >
              {bestAthlete.score}
            </Typography>
            <Typography
              color={theme.pallete.gray.firstGray}
              weight="700"
              size={getV("24px", "w")}
              align="center"
            >
              {bestAthlete.team}
            </Typography>
          </S.FlexContainer>
        </Card>
        <Card flex direction="column" justify="flex-start" area="e">
          <Typography size={getV("24px", "w")} type="h2">
            Time que mais pontuou na rodada
          </Typography>
          <S.FlexContainer direction="column">
            <Typography
              color={theme.pallete.alert.main}
              weight="700"
              size={getV("24px", "w")}
              align="center"
            >
              {bestTeam.team}
            </Typography>
            <Typography
              weight="700"
              size={getV("24px", "w")}
              align="center"
              gradient
            >
              {bestTeam.score}
            </Typography>
            <Typography
              color={theme.pallete.gray.firstGray}
              weight="700"
              size={getV("24px", "w")}
              align="center"
            >
              {bestTeam.name}
            </Typography>
          </S.FlexContainer>
        </Card>
        <Card flex direction="column" justify="flex-start" area="f">
          <Typography size={getV("24px", "w")} type="h2">
            Usuários ativos nessa rodada
          </Typography>
          <S.FlexContainer direction="column">
            <Typography
              weight="700"
              size={getV("24px", "w")}
              align="center"
              gradient
            >
              {(((lastTotalTeams - totalTeams) / totalTeams) * 100).toFixed(1)}%
            </Typography>
            <Typography
              color={theme.pallete.gray.firstGray}
              weight="700"
              size={getV("24px", "w")}
              align="center"
            >
              {totalTeams}
            </Typography>
          </S.FlexContainer>
        </Card>
      </S.GridWrapper>
    </S.GlobalWrapper>
  );
};

const Modal = (props) => {
  const { show, setShow, roundsInfo } = props;
  const theme = useTheme();

  return (
    <S.ModalWrapper show={show}>
      <Card size="extraLarge">
        <S.FlexContainer
          direction="column"
          justify="flex-start"
          marginLeft
          marginRight
        >
          <S.FlexContainer marginBottom="32px" justify="space-between">
            <Typography type="h2">Gerenciar Rodadas</Typography>
            <Button type="icon" onClick={() => setShow(false)}>
              X
            </Button>
          </S.FlexContainer>
          <S.ModalList>
            <S.ModalHeader />
            <S.Form>
              {roundsInfo.map(() => {
                return (
                  <S.ModalListItem column="1fr 2fr 2fr 2fr 2fr" as="li">
                    <input type="radio" />
                    <Typography
                      color={theme.pallete.gray.black}
                      weight="700"
                      size={getV("32px", "h")}
                      type="p"
                    >
                      Rodada1
                    </Typography>
                    <Typography
                      size={getV("32px", "h")}
                      color={theme.pallete.gray.firstGray}
                      type="p"
                    >
                      455 Times
                    </Typography>
                    <S.ModalTag current>Rodada finalizada</S.ModalTag>
                    <S.FlexContainer>
                      <Button type="icon">
                        <img src={upload} alt="upload" />
                      </Button>
                      <Button type="icon">
                        <img src={deletar} alt="deletar" />
                      </Button>
                    </S.FlexContainer>
                  </S.ModalListItem>
                );
              })}
            </S.Form>
          </S.ModalList>
          <p>buttons</p>
        </S.FlexContainer>
      </Card>
    </S.ModalWrapper>
  );
};

function range(start, stop) {
  return [...Array(stop - start).keys()].map((i) => i + start);
}
function getButtons(page, totalPages, theme, setPage) {
  const currentPage = page + 1;
  let start = 0;
  let stop = 0;
  if (page === 0) {
    start = 0;
    stop = 3;
  } else if (page === totalPages) {
    start = -2;
    stop = 1;
  } else {
    start = -1;
    stop = 2;
  }
  const constructorArray = range(start, stop);

  return constructorArray.map((item) => {
    return (
      <Button
        size={getV("32px", "h")}
        type="icon"
        variation={item === 0 ? "secondary" : "search"}
        rounded
        onClick={() => setPage(item + page)}
      >
        <Typography
          color={
            item === 0 ? theme.pallete.gray.black : theme.pallete.secondary.main
          }
        >
          {item + currentPage}
        </Typography>
      </Button>
    );
  });
}
function checkTeamsNameLenght(listOfTeams) {
  const checkTeamName = (listOfGame) => {
    return listOfGame.map((item) => {
      if (item.length > 15) {
        return item.slice(0, 18) + "...";
      } else {
        return item;
      }
    });
  };
  return listOfTeams.map((item) => checkTeamName(item));
}
