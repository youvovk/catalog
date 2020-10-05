
import React from 'react';

import { Input } from '../patterns/Input/Input';
import { Row } from '../patterns/Row/Row';

import './Form.scss';

export const Form = () => (
    <form className="c-booking c-booking--vertical c-form">
        <Row className="c-booking__row">
            <div className="c-booking__title">
                Найти
            </div>
        </Row>
        <Row className="c-booking__row">
            <Input
                classInput = 'c-booking__input'
                type = 'text'
                placeholder = 'Кобеляки'
                dataTitle = 'Место/название объекта:'
            />
        </Row>
        <Row className="c-booking__row">
            <Input
                classInput = 'c-booking__input'
                type = 'text'
                placeholder = 'Среда, 18 декабря 2019'
                dataTitle = 'Дата заезда:'
            />
        </Row>
        <Row className="c-booking__row">
            <Input
                classInput = 'c-booking__input'
                type = 'text'
                placeholder = 'Среда, 18 декабря 2019'
                dataTitle = 'Дата отъезда:'
            />
        </Row>
        <Row className="c-booking__row">
            <Input
                classInput = 'c-booking__input c-booking--pl-10 c-booking--pr-10'
                type = 'text'
                placeholder = '2 взрослых'
                dataTitle = 'Номера для:'
            />
        </Row>
        <Row className="c-booking__row c-booking--mt-10">
            <div className="c-booking__half">
                <Input
                    classInput = 'c-booking__input c-booking--pl-10 c-booking--pr-10 c-booking--mr-10'
                    type = 'text'
                    placeholder = 'Без детей'
                />
            </div>
            <div className="c-booking__half">
                <Input
                    classInput = 'c-booking__input c-booking--pl-10 c-booking--pr-10'
                    type = 'text'
                    placeholder = '1 номер'
                />
            </div>
        </Row>
        <Row className="c-booking__row c-booking--mt-10">
            <button className="c-button c-button--blue" type="submit">
                    <span className="c-button__inner">
                        Найти
                    </span>
            </button>
        </Row>
    </form>
);