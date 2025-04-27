export interface AppData {
    header:       Header;
    features:     Feature[];
    operations:   Operation[];
    testimonials: Testimonial[];
    footer:       Footer;
}

export interface Feature {
    title: string;
    text:  string;
    icon:  string;
    img:  string;
}

export interface Operation {
    title: string;
    text:  string;
    icon:  string;
    id: string;
}

export interface Footer {
    logoSrc:  string;
    navItems: NavItem[];
}

export interface NavItem {
    title: string;
    link:  string;
    id:    string;
}

export interface Header {
    logoImg:  string;
    logoName: string;
    navItems: NavItem[];
}

export interface Testimonial {
    title:  string;
    text:   string;
    person: Person;
}

export interface Person {
    name:    string;
    country: string;
    img:     string;
}
