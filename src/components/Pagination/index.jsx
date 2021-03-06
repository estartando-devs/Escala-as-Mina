import * as C from "../";
import * as S from "../../pages/dashboard/styledPage";
import { PaginationButtons } from "./components/PaginationButton";
import { useTheme } from "styled-components";

export const Pagination = (props) => {
  const { setPage, page, totalPages } = props;
  const theme = useTheme();

  let start = 0;
  let stop = 0;

  if (page === 0) {
    start = 0;
    stop = totalPages <= 3 ? totalPages : 3;
  } else if (page + 1 === totalPages) {
    start = totalPages === 2 ? -1 : -2;
    stop = 1;
  } else {
    start = -1;
    stop = 2;
  }

  const firstPage = page + start;
  const lastPage = page + stop;

  const isntFirstPage = page !== 0;
  const instLastPage = page + 1 !== totalPages;
  const theresPagesLeft = firstPage > 1;
  const theresPagesRight = lastPage < totalPages;

  return (
    <S.GridColumnWrapper column="2fr 1fr 2fr">
      <>
        {isntFirstPage && (
          <S.FlexContainer>
            <C.Button type="icon" onClick={() => setPage(page - 1)}>
              <C.Typography
                size="14px"
                color={theme.pallete.gray.fifthGray}
                font="Poppins"
                weight="500"
              >
                {"<"}
              </C.Typography>
            </C.Button>
            <C.Button type="icon" onClick={() => setPage(0)}>
              <C.Typography
                size="14px"
                color={theme.pallete.gray.fifthGray}
                font="Poppins"
                weight="500"
              >
                Primeira Página
              </C.Typography>
            </C.Button>
            {theresPagesLeft && (
              <C.Typography
                size="14px"
                color={theme.pallete.gray.fifthGray}
                font="Poppins"
                weight="500"
              >
                ...
              </C.Typography>
            )}
          </S.FlexContainer>
        )}

        {!isntFirstPage && !theresPagesLeft && <div></div>}
      </>

      <C.FlexContainer>
        <PaginationButtons
          page={page}
          setPage={setPage}
          start={start}
          stop={stop}
        />
      </C.FlexContainer>
      <C.FlexContainer>
        {theresPagesRight && (
          <C.Typography
            size="14px"
            color={theme.pallete.gray.fifthGray}
            font="Poppins"
            weight="500"
          >
            ...
          </C.Typography>
        )}
        {instLastPage && (
          <>
            {page + 1 !== totalPages && (
              <C.Button type="icon" onClick={() => setPage(totalPages - 1)}>
                <C.Typography
                  size="14px"
                  color={theme.pallete.gray.fifthGray}
                  font="Poppins"
                  weight="500"
                >
                  Última Página
                </C.Typography>
              </C.Button>
            )}
            <C.Button type="icon" onClick={() => setPage(page + 1)}>
              <C.Typography
                size="14px"
                color={theme.pallete.gray.fifthGray}
                font="Poppins"
                weight="500"
              >
                {">"}
              </C.Typography>
            </C.Button>
          </>
        )}
      </C.FlexContainer>
    </S.GridColumnWrapper>
  );
};
