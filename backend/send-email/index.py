import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту mn-tlt@mail.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    text = body.get('text', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()

    if not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Телефон обязателен'})
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    from_email = 'mn-tlt@mail.ru'
    to_email = 'mn-tlt@mail.ru'

    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = 'Новая заявка с сайта — Магазин недвижимости'

    lines = [
        'Новая заявка с сайта "Магазин недвижимости"',
        '',
        f'Телефон: {phone}',
    ]
    if email:
        lines.append(f'E-mail: {email}')
    if text:
        lines.append(f'Сообщение: {text}')

    msg.attach(MIMEText('\n'.join(lines), 'plain', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
