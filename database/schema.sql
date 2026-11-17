CREATE TABLE states (
    id SERIAL PRIMARY KEY,
    state_code VARCHAR(10),
    state_name VARCHAR(50),
    population BIGINT,
    rate NUMERIC
);

CREATE TABLE age_groups (
    id SERIAL PRIMARY KEY,
    age_group VARCHAR(20),
    year INTEGER,
    suicide_rate NUMERIC
);

CREATE TABLE support_services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(50),
    website TEXT
);

CREATE TABLE assessments (
    id SERIAL PRIMARY KEY,
    assessment_type VARCHAR(20),
    score INTEGER,
    category VARCHAR(50)
);
