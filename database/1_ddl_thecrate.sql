CREATE table facultys(
    cod_faculty SERIAL NOT NULL,
    name_faculty VARCHAR(200) NOT NULl,
    constraint PK_FACULTYS primary key (cod_faculty)
);
ALTER TABLE facultys owner to user_node;
CREATE table teachers(
    cod_teacher SERIAL NOT NULL,
    cod_faculty int4 NOT NULL,
    id_teacher VARCHAR(200) NOT NULL,
    name_teachers VARCHAR(200) NOT NULL,
    lastname_teachers VARCHAR (200) NOT NULL,
    type_teacher int2 NOT NULL
        constraint CK_TYPETEACHER check(type_teacher in(1,2,3,4,5,6)),
    constraint PK_TEACHERS primary key (cod_teacher)
);
ALTER TABLE teachers owner to user_node;

ALTER TABLE teachers
    add constraint FK_FACUL_TEACH FOREIGN KEY (cod_faculty)
    REFERENCES facultys(cod_faculty)
    on delete restrict ON UPDATE cascade; 