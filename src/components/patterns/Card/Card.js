import React from 'react';

import { Row } from './Row';
import { Slider } from '../Slider/Slider';

export const Card = ({ card = [] }) => {
    const options = { isLast: false, isPlural: true, isEmpty: false };
    const {
        photos = []
    } = card;

    const gallery = url => (
        <div className="c-card--shadow">
            <img src={url}
                 alt='' />
        </div>
    );

    const title = () => (
        <a className="c-card__title" href="javascript:void(0)">
            Ibis Budget Auckland Airport
        </a>
    );

    const square = (isStars = false, quantity) => (
        <div className="c-card__square">
            {isStars
                ? <>
                    <span className="c-card__star--item">
                        <svg className="icon icon--star">
                            <use href="images/_sprite.svg#icon--star" />
                        </svg>
                    </span>
                            <span className="c-card__star--item">
                        <svg className="icon icon--star">
                            <use href="images/_sprite.svg#icon--star" />
                        </svg>
                    </span>
                            <span className="c-card__star--item">
                        <svg className="icon icon--star">
                            <use href="images/_sprite.svg#icon--star" />
                        </svg>
                    </span>
                            <span className="c-card__star--item">
                        <svg className="icon icon--star">
                            <use href="images/_sprite.svg#icon--star" />
                        </svg>
                    </span>
                            <span className="c-card__star--item">
                        <svg className="icon icon--star">
                            <use href="images/_sprite.svg#icon--star" />
                        </svg>
                    </span>
                </>
                : <>
                    <span className="c-card__square--item" />
                    <span className="c-card__square--item" />
                    <span className="c-card__square--item" />
                    <span className="c-card__square--item" />
                    <span className="c-card__square--item" />
                </>
            }
        </div>
    );

    const rating = () => (
        <div className="c-card__rating">
            <div className="c-card__rating--row">
                {(options.isEmpty || options.isLast) && (
                    <div className="c-card__rating--review">
                        678
                        <br/>
                        отзывов
                    </div>
                )}
                <div className="c-card__rating--number">
                    8.7
                </div>
            </div>
            <div className="c-card__rating--text">
                Великолепно
            </div>
        </div>
    );

    const tag = () => <span className="c-card__tag--item c-card__tag--single">Апарт-отель</span>;

    const group = () => (
        <div className="c-card--group">
            <div className="c-card__row">
                <a className="c-card__location" href="javascript:void(0)"
                   title="Урочище Наталка, ул. 2-я линия, 26, Оболонский район, Киев, Украина">
                    <svg className="icon icon--pin">
                        <use href="images/_sprite.svg#icon--pin" />
                    </svg>
                    <span className="c-card__location--region">Урочище Наталка,</span>
                    <span className="c-card__location--address">ул. 2-я линия, 26,</span>
                    <span className="c-card__location--district">Оболонский район,</span>
                    <span className="c-card__location--city">Киев,</span>
                    <span className="c-card__location--country">Украина</span>
                </a>
            </div>
            <div className="c-card__row">
                <div className="c-card__distance">
                    200 м от центра
                </div>
                <div className="c-card__dot" />
                <a className="c-card__map" href="javascript:void(0)">
                    Показать на карте
                </a>
            </div>
        </div>
    );

    const list = () => (
        <div className="c-card__list">
            <div className="c-card__list--item">
                <div className="c-card__list--logo">
                    <img src="images/logo_services/booking.svg" alt="image" />
                </div>
                <div className="c-card__list--no-return">
                    <div className="icon" />
                    Стоимость не возвращается
                </div>
                <div className="c-card__list--price">
                    8 879 UAH
                </div>
            </div>
            <div className="c-card__list--item">
                <div className="c-card__list--logo">
                    <img src="images/logo_services/booking.svg" alt="image" />
                </div>
                <div className="c-card__list--free">
                    Бесплатная отмена
                </div>
                <div className="c-card__list--price">
                    4 879 UAH
                </div>
            </div>
            <div className="c-card__list--item">
                <div className="c-card__list--logo">
                    <img src="images/logo_services/agoda.svg" alt="image" />
                </div>
                <div className="c-card__list--free">
                    Бесплатная отмена
                </div>
                <div className="c-card__list--price">
                    5 879 UAH
                </div>
            </div>
            <div className="c-card__list--item">
                <div className="c-card__list--logo">
                    <img src="images/logo_services/park-inn.svg" alt="image" />
                </div>
                <div className="c-card__list--free">

                </div>
                <div className="c-card__list--price">
                    4 879 UAH
                </div>
            </div>
        </div>
    );

    const buyMax1151 = () => (
      <>
          <div className="c-card__column">
              <div className="c-card__buy">
                  <div className="c-card__buy--service c-card--text-left">
                      Booking.com
                  </div>
                  <div className="c-card__buy--price c-card--mt-0 c-card--fs-16 c-card--fw-600">
                      8 879 UAH
                  </div>
              </div>
          </div>
          <div className="c-card__column">
              <a className="c-card__buy--button c-card__buy--blue" href="javascript:void(0)">
                  Забронировать
              </a>
          </div>
      </>
    );

    const ratingMax767 = () => (
        <div className="c-card__rating">
            <div className="c-card__rating--number">
                8.7
            </div>
            <div className="c-card__rating--text">
                Отличное расположение
            </div>
        </div>
    );

    const buy = () => (
        <div className="c-card__buy">
            {options.isEmpty
                ? (
                    <>
                        <div className="c-card__buy--hourglass">
                            <svg className="icon icon--hourglass">
                                <use href="images/_sprite.svg#icon--hourglass" />
                            </svg>
                        </div>
                        <div className="c-card--fs-16 c-card--fw-600">
                            Вы не успели!
                        </div>
                        <div className="c-card--fs-12 c-card--mt-0">
                            Попробуйте другие даты
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="c-card__buy--service">
                            На Booking.com
                        </div>
                        <div className="c-card__buy--price c-card--mt-0">
                            8 879 <span>UAH</span>
                        </div>
                        <a className="c-card__buy--button" href="javascript:void(0)">
                            Выбрать
                        </a>
                        <div className="c-card__buy--days">
                            за 5 ночей
                        </div>
                        <a className="c-card__buy--compare" href="javascript:void(0)">
                            Сравнить 5 поставщиков
                        </a>
                    </>
                )
            }
        </div>
    );

    const alert = () => (
        <div className="c-card__alert">
            <div className="c-card__alert--img">
                <img src="images/all/attention.svg"  alt="image" />
            </div>
            <div className="c-card__alert--content">
                <div className="c-card__alert--title">
                    Распродано
                </div>
                <div className="c-card__alert--text">
                    На нашем сайте в этом варианте размещения не осталось номеров на ваши даты:
                    <br/>
                    ср, 20 февр. 2019 - сб, 23 февр. 2019 (3 ночи)
                </div>
            </div>
        </div>
    );

    const alertLight = () => (
        <>
            <div className="c-card__alert c-card__alert--blue">
                <div className="c-card__alert--img">
                    <img src="images/all/no-disturb.svg"  alt="image" />
                </div>
                <div className="c-card__alert--content">
                    <div className="c-card__alert--text">
                        У нас не осталось номеров на ваши даты: ср, 20 февр. 2019 - сб, 23 февр. 2019 (3
                        ночи)
                    </div>
                </div>
            </div>

            <Row additionalClass='min-1152 c-card--mt-10'>На эти даты еще есть номера, но они могут закончиться</Row>
        </>
    );



    const cardRight = () => {
        if (options.isPlural || options.isEmpty) {
            return (
                <div className="c-card__right min-1152">
                    {rating()}

                    {buy()}
                </div>
            );
        }

        return <></>;
    };

    const alertMax1151 = () => (
      <>
          <Row additionalClass='c-card--text-right c-card--mt-10 max-1151'>
              {
                  <div className="c-card__mark">
                      Распродано
                  </div>
              }
          </Row>

          <Row additionalClass='c-card--red c-card--lh c-card--text-right max-1151'>
              Объект размещения полностью
              <br/>
              забронирован на нашем сайте
          </Row>
      </>
    );

    const slideSet = () => (
        <div className="c-card__slideset c-slick c-slick__card--slideset c-slick--arrow-m-0">
            <div className="c-card__slideset--item">
                <div className="c-card__slideset--top">
                    2 нояб - 3 нояб
                    <br/>
                    3 ночи сб - вт
                </div>
                <div className="c-card__slideset--bottom">
                    От 3560 UAH
                </div>
            </div>
            <div className="c-card__slideset--item">
                <div className="c-card__slideset--top">
                    2 нояб - 3 нояб
                    <br/>
                    3 ночи сб - вт
                </div>
                <div className="c-card__slideset--bottom">
                    От 3560 UAH
                </div>
            </div>
            <div className="c-card__slideset--item">
                <div className="c-card__slideset--top">
                    2 нояб - 3 нояб
                    <br/>
                    3 ночи сб - вт
                </div>
                <div className="c-card__slideset--bottom">
                    От 3560 UAH
                </div>
            </div>
            <div className="c-card__slideset--item">
                <div className="c-card__slideset--top">
                    2 нояб - 3 нояб
                    <br/>
                    3 ночи сб - вт
                </div>
                <div className="c-card__slideset--bottom">
                    От 3560 UAH
                </div>
            </div>
            <div className="c-card__slideset--item">
                <div className="c-card__slideset--top">
                    2 нояб - 3 нояб
                    <br/>
                    3 ночи сб - вт
                </div>
                <div className="c-card__slideset--bottom">
                    От 3560 UAH
                </div>
            </div>
        </div>
    );

    const lastBooking = () => (
        <div className="c-card--has-icon c-card--fs-12-max-1151 c-card--lh-max-1151">
            <img src="images/all/card__bell.svg" alt="image" />
            Последний раз забронированно на ваши даты 17 минут назад
        </div>
    );

    const lastSeen = () => (
        <div className="c-card--has-icon c-card--red">
            <img src="images/all/card__search.svg" alt="image" />
            Еще 2 человека просматривали этот отель на ваши даты за последние 10 минут
        </div>
    );

    const lastCard = () => (
      <>
          <div className="c-card__column">
              <div className="c-card__row min-1152">
                  <div className="c-card__mark">
                      Выгодный вариант
                  </div>
              </div>
              <div className="c-card__row">
                  <div
                      className="c-card--fw-600 c-card--lh c-card--text-right-max-1151 c-card--fs-12 max-1151">
                      Стандартный двухместный номер
                      <br/>
                      с 2 отдельными кроватями
                  </div>
              </div>
              <div className="c-card__row min-1152">
                  1 большая двухместная кровать
              </div>
              <div className="c-card__row min-1152">
                  <div className="c-card--fw-600 c-card--blue">
                      На нашем сайте остался 1 номер
                  </div>
              </div>
          </div>
          <div className="c-card__column">
              <div className="c-card__row c-card--text-right c-card--mt-0 c-card--fs-12 max-1151">
                  <div className="c-card--gray">
                      2 ночи, 2 взросых и 2 детей
                  </div>
              </div>
              <div className="c-card__row c-card--text-right c-card--mt-0">
                  <div className="c-card__price c-card--fs-14-max-1151">
                      <s className="c-card--fw-300 c-card--fs-12 max-1151">8 879 UAH</s> 8 879 UAH
                  </div>
              </div>
              <div className="c-card__row c-card--text-right c-card--mt-0">
                  <div className="c-card--gray c-card--fs-12">
                      + налоги и сборы (UAH 678)
                  </div>
              </div>
              <div className="c-card__row c-card--text-right c-card--mt-0">
                  <div className="c-card--blue c-card--fw-600 c-card--text-transform c-card--fs-12">
                      ПРЕДОПЛАТА НЕ ТРЕБУЕТСЯ -
                  </div>
              </div>
              <div className="c-card__row c-card--text-right c-card--mt-0">
                  <div className="c-card--lh c-card--fs-12">
                      платите на месте
                  </div>
              </div>
              <div className="c-card__row c-card--text-right c-card--mt-0">
                  <div className="c-card--green c-card--fw-600 c-card--fs-12">
                      Беслатная отмена
                  </div>
              </div>
          </div>
      </>
    );

    return (
        <div className="c-card c-card--catalog">
            <div className="c-card__left">
                <div className="c-slick__wrap">
                    <div className="c-slick c-slick__card">
                        <Slider items={photos.map(({ url_original = '' }) => ({ html: gallery(url_original), uuid: url_original }))} />
                    </div>
                </div>
            </div>
            <div className="c-card__center">
                <Row>{title()}</Row>

                <Row>
                    {square()}

                    {tag()}
                </Row>

                <Row additionalClass='max-767'>{ratingMax767()}</Row>

                <Row>{group()}</Row>

                {options.isLast && (
                    <>
                        <Row>{lastBooking()}</Row>
                        <Row additionalClass='min-1152'>{lastSeen()}</Row>
                        <Row additionalClass='c-card--flex-between c-card--column-max-1151 c-card--flex-end-max-1151'>{lastCard()}</Row>
                    </>
                )}

                {options.isPlural && <Row additionalClass='min-1152'>{list()}</Row>}

                {options.isEmpty && (
                    <>
                        <Row additionalClass='min-1152'>{alert()}</Row>
                        alertMax1151()
                        <Row additionalClass='min-1152 c-card--mt-10'>{slideSet}</Row>
                    </>
                )}

                <Row additionalClass={'c-card--flex-between c-card--align-end max-1151'}>{buyMax1151()}</Row>
            </div>

            {cardRight()}
        </div>
    );
};